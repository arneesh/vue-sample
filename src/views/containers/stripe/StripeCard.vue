<template>
  <div>
    <card class='stripe-card'
      :class='{ complete }'
      :stripe="stripe"
      :options='stripeOptions'
      @change='complete = $event.complete'
    />

    <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Pay with credit card</button>

  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";

export default {
  components: { Card },

  data: function() {
    return {
      complete: false,
      stripeOptions: {
                  hidePostalCode: false

      },
      stripe: "pk_test_51IThAPG0ZEpqH59Y8l8bOwzOaAcw7hjB38ql2Of8OIYeZxI82XdKJdthn6AIrn6FEqhcPlxbnOVsKlzD4ZXcLfts00c77FMftx"
    };
  },
    methods: {
    pay () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token))
    }
  },
  watch: {
    number () { this.update() },
    expiry () { this.update() },
    cvc () { this.update() }
  }
};
</script>

<style lang="scss" scoped>
.stripe-card {
  width: 400px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style>