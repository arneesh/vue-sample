<template>
    <div>
    <b-row class="mt-5">
      <b-col md="12" align="left">
        <h3>Pay By Card</h3>
      </b-col>
    </b-row>
    <b-row class="mt-5">
        <b-col md="12">
            <stripe-checkout-test />
        </b-col>
    </b-row>
    </div>
</template>

<script>
import StripeCheckoutTest from "../../../containers/checkout/StripeCheckoutTest.vue";
    export default {
        components: {
            "stripe-checkout-test": StripeCheckoutTest,
        } 
    }
</script>

<style lang="scss" scoped>

</style>