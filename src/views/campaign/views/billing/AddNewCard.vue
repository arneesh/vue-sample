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
          ref="stripe_card_ele"
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
import { Card, createToken, instance } from "vue-stripe-elements-plus";

export default {
  components: {
    card: Card
  },

  data: function() {
    return {
      user_profile: {
        full_name: 'Arneesh Aima',
        email: 'arneesh@scrobeless.co',
        phone: 9876543210
      },
      tax_id: '',
      tax_type: 'eu_vat',

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


                      
                let setup_intent_response = await fetch(`http://localhost:3000/setup-intent/${ this.customer_id }`, {
                method: 'POST',
                headers: {
                            'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                        source: 'tok_visa'
                    })
                });

                let setup_intent_response_data = await setup_intent_response.json();

                  let options = {
                      'payment_method': {
                        'card': this.$refs.stripe_card_ele.$refs.element._element,
                        'billing_details': {
                          'phone': this.user_profile.phone,
                          'name': this.user_profile.full_name,
                          'email': this.user_profile.email
                        }
                      }
                    }


                    console.log("Options", options);


                let confirm_card_payment_response = await instance.confirmCardSetup(setup_intent_response_data.client_secret, options )

            console.log('confirm_card_payment_response :>> ', confirm_card_payment_response);


                if(confirm_card_payment_response.errror) {
                  console.log('error :>> ');
                }

                if(confirm_card_payment_response.setupIntent.status == 'suceeded') {
                  console.log('successful :>> ') 
                  }


                  let payment_method_id = confirm_card_payment_response.setupIntent.payment_method;
                
                let response = await fetch(`http://localhost:3000/add-card/${ this.customer_id }`, {
                method: 'POST',
                headers: {
                            'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                        payment_method_id: payment_method_id,
                        tax_id: this.tax_id,
                        tax_type: this.tax_type
                    })
                });

                let data = await response.json();



                console.log('add card response :>> ', data);

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