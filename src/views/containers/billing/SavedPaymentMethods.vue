<template>
  <div>
    <template v-if="loading">
      <b-row class="mt-5">
        <b-col md="12">
          <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <template v-if="payment_methods.length > 0">
        <b-card
          class="mt-5 shadow"
          v-for="(payment_method,index) in payment_methods"
          v-bind:key="index"
        >
          <div>
            <b-row>
              <b-col md="4" class="mt-3 text-left">
                <small>Vendor:</small>
                <badge type="primary" class="text-uppercase">{{ payment_method.card.brand}}</badge>
                <br />

                <small>
                  Type:
                  <span class="text-primary">{{ payment_method.type}}</span>
                </small>
              </b-col>
              <b-col md="4" class="mt-3">
                <b-badge
                  variant="success"
                  v-if=" payment_method && customerData && (payment_method.id == customerData.invoice_settings.default_payment_method)"
                >Default Payment Method</b-badge>

              <h5 class="h5 text-primary"
                > <strong>**** **** **** {{ payment_method.card.last4}}</strong> </h5>
              </b-col>
              <b-col md="4" class="mt-3 text-right">
                <!-- <b-link
                  :to="{ name: 'PayByCard', params: { 'campaignId': campaignId, 'stripeCustomerId': stripeCustomerId , cardInfo: payment_method } }"
                  class="btn btn-primary"
                >
                  Use
                  <i class="fa fa-arrow-right"></i>
                </b-link> -->
                <b-button variant="primary" @click="selectCard(payment_method)" v-b-modal.modal1>
                Use
                </b-button>
                <base-button v-if="allowRemove" type="danger">
                  <i class="fa fa-trash"></i>
                  Remove
                </base-button>
              </b-col>
            </b-row>
          </div>
        </b-card>
        <b-row class="mt-5">
          <b-col class="md-12">
            <b-link
              :to="{ name: 'AddNewCard', params: { 'campaignId': campaignId, 'stripeCustomerId': stripeCustomerId } }"
              class="btn btn-primary"
            >
              Add New Card
              <i class="fa fa-arrow-right"></i>
            </b-link>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-alert show variant="secondary">
          <h4 class="alert-heading">No Payment Method Setup</h4>
          <p class="description">
            No payment method is currently setup. You can setup a payment method using
            <span
              class="text-primary"
            >Pay By Card</span> option or
            <span class="text-primary">Monthly Invoice</span> method.
          </p>
          <hr />
          <b-link
            :to="{ name: 'AddNewCard', params: { 'campaignId': campaignId, 'stripeCustomerId': stripeCustomerId } }"
            class="btn btn-primary"
          >
            Set Up Payment Method
            <i class="fa fa-arrow-right"></i>
          </b-link>
        </b-alert>
      </template>
    </template>

    <b-modal id="modal1" title="Card Selected for Payment">
    <p class="my-4">

      <div v-if="selected_card">

                <small>Card Number: </small>

                <b-card class="shadow">
                 <h4 class="text-primary text-center">**** **** **** {{ selected_card.card.last4}}</h4> 
                </b-card>

                <div class="mt-3">
                <small>Vendor: </small>
                <badge type="primary" class="text-uppercase">{{ selected_card.card.brand}}</badge>

                </div>
                
      </div>

    </p>
  </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      selected_card: ''
    };
  },
  props: {
    allowRemove: {
      required: false
    },
    campaignId: {
      type: String,
      required: true
    },
    stripeCustomerId: {
      type: String,
      required: true
    }
  },
  computed: {
    payment_methods: function() {
      return this.$store.getters.getSavedPaymentMethodsList;
    },
    customerData: function() {
      return this.$store.getters.getCustomerData;
    },
    loading: function() {
      return this.$store.getters.getLoadingState;
    }
  },
  methods: {
    ...mapActions(["getSavedPaymentMethods", "getStripeCustomer"]),
    selectCard: function(value) {
      this.selected_card = value;
    }
  },
  mounted() {
    this.$store.dispatch("getSavedPaymentMethods", {
      campaignId: this.campaignId,
      stripeCustomerId: this.stripeCustomerId,
      paymentMethodType: "card"
    });

    this.$store.dispatch("getStripeCustomer", {
      stripeCustomerId: this.stripeCustomerId
    });
  }
};
</script>

<style lang="scss" scoped>
</style>