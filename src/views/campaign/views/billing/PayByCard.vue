<template>
  <div>
    <b-row class="mt-5">
      <b-col md="12" align="left">
        <h3>Pay By Card</h3>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col md="12">
        <b-card class="shadow">
          <b-row>
            <b-col md="4" class="mt-3 text-left">
              <small>Vendor:</small>
              <badge type="primary" class="text-uppercase">{{ selected_card.card.brand}}</badge>
              <br />

              <small>
                Type:
                <span class="text-primary">{{ selected_card.type}}</span>
              </small>
            </b-col>
            <b-col md="4" class="mt-3">
              <b-badge
                variant="success"
                v-if=" selected_card && customerData && (selected_card.id == customerData.invoice_settings.default_selected_card)"
              >Default Payment Method</b-badge>

              <h5 class="h5 text-primary">
                <strong>**** **** **** {{ selected_card.card.last4}}</strong>
              </h5>
            </b-col>
            <b-col md="4" class="mt-3 text-right"></b-col>
          </b-row>
        </b-card>
        <stripe-checkout-test class="mt-5" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import StripeCheckoutTest from "../../../containers/checkout/StripeCheckoutTest.vue";
export default {
  components: {
    "stripe-checkout-test": StripeCheckoutTest
  },
  props: {
  },
  computed: {
    selected_card: function() {
      return this.$store.getters.getSelectedCard;
    },
  }
};
</script>

<style lang="scss" scoped>
</style>