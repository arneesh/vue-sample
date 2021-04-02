<template>
  <div>
    <b-row class="mt-5">
      <b-col md="12">
        <template>
          <saved-payment-methods :campaignId="campaignId" :stripeCustomerId="stripeCustomerId" />
        </template>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import SavedPaymentMethods from "../../../containers/billing/SavedPaymentMethods.vue";

export default {
  components: {
        "saved-payment-methods": SavedPaymentMethods,
  },
    props: {
    campaignId: {
      required: true
    },
    stripeCustomerId: {
      type: String,
      required: true
    }
  },
  methods: {

  },

};
</script>

<style lang="scss" scoped>
</style>