<template>
  <div>
    <b-row class="mt-5">
      <b-col md="12" align="left">
        <h3>Add Card</h3>
      </b-col>
    </b-row>
    <b-row class="mt-5" align="center">
      <b-col md="12">
        <card
          class="stripe-card"
          :class="{ complete }"
          :stripe="stripe"
          :options="stripeOptions"
          @change="complete = $event.complete"
        />

         <b-button class="mt-3" variant="primary" @click.prevent="addCard">Add Card</b-button>

      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";

export default {
  components: {
    card: Card
  },

  data: function() {
    return {
      complete: false,
      stripeOptions: {
        hidePostalCode: false
      },
    customer_id: "cus_J8eSiEYReZNQfX",
      stripe:
        "pk_test_51IThAPG0ZEpqH59Y8l8bOwzOaAcw7hjB38ql2Of8OIYeZxI82XdKJdthn6AIrn6FEqhcPlxbnOVsKlzD4ZXcLfts00c77FMftx"
    };
  },
  props: {
    campaignId: {
      type: String,
      required: true
    },
    stripeCustomerId: {
      type: String,
      required: true
    }
  },
  methods: {
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token));
    },
    addCard: async function() {
                
                let response = await fetch(`http://localhost:3000/add-card/${ this.customer_id }`, {
                method: 'POST',
                headers: {
                            'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                        source: 'tok_visa'
                    })
                });

                let data = await response.json();

                if(data.status =="success") {
                  this.$router.push({name: 'CampaignSavedPaymentMethods', params: { 'campaignId': this.campaignId, 'stripeCustomerId': this.stripeCustomerId } });
                }
            },
  },
  watch: {
    number() {
      this.update();
    },
    expiry() {
      this.update();
    },
    cvc() {
      this.update();
    }
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