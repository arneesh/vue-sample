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
        <b-card class="mt-5 shadow" v-for="(payment_method,index) in payment_methods" v-bind:key="index">
          <div>
            <b-row>
              <b-col class="md-6 text-left">
                <h3
                  class="h5 text-primary font-weight-bold"
                >**** **** **** {{ payment_method.last4}}</h3>
                <small>Vendor:</small>
                <badge type="primary" class="text-uppercase">{{ payment_method.brand}}</badge>
                <br />

                <small>
                  Type:
                  <span class="text-primary">{{ payment_method.object}}</span>
                </small>
              </b-col>
              <b-col class="md-6 text-right">
                <b-link
                  :to="{ name: 'PayByCard', params: { 'campaignId': campaignId, 'stripeCustomerId': stripeCustomerId } }"
                  class="btn btn-primary"
                >
                  View
                  <i class="fa fa-arrow-right"></i>
                </b-link>
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
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {};
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
    loading: function() {
      return this.$store.getters.getLoadingState ;
    }
  },
  methods: {
    ...mapActions(["getSavedPaymentMethods"])
  },
  mounted() {
    this.$store.dispatch("getSavedPaymentMethods", {
      campaignId: this.campaignId,
      stripeCustomerId: this.stripeCustomerId
    });
  }
};
</script>

<style lang="scss" scoped>
</style>