<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <b-button variant="primary" @click="submit">Checkout</b-button>
  </div>
</template>

<script>
import StripeCheckout  from "./index.js";

export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51IThAPG0ZEpqH59Y8l8bOwzOaAcw7hjB38ql2Of8OIYeZxI82XdKJdthn6AIrn6FEqhcPlxbnOVsKlzD4ZXcLfts00c77FMftx";
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1IWfarG0ZEpqH59YAum2OcOA', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'https://weather-live-arn.herokuapp.com/',
      cancelURL: 'https://weather-live-arn.herokuapp.com/',
    };
  },
  methods: {
    submit: async function () {

      let that = this.$refs;

      //  let product_creation_response = await fetch('http://localhost:3000/create-product-pricing', {
      //     method: 'POST',
      //     headers: {
      //               'Content-Type': 'application/json'
      //           },
      //           body: JSON.stringify({
      //               campaign_id: 'campaign_id_57',
      //               campaign_name: 'name_of_campaign1',
      //               price: 44 * 100,
      //               currency: 'usd',
      //               images: ['https://uploads-ssl.webflow.com/5e99ba0b8f2dc750e9b345d0/5ef4d21ddef12514bd88f799_notemockup.png']
      //           })
      //   });


      // Save the product id that is ebing returned from here - also remove he create product
      // option from here and instead create an admin api endpoint for something like this

      //  let product_creation_response = await fetch('http://localhost:3000/create-product', {
      //     method: 'POST',
      //     headers: {
      //               'Content-Type': 'application/json'
      //           },
      //           body: JSON.stringify({
      //               product_name: 'Full Service A4',
      //               images: ['https://uploads-ssl.webflow.com/5e99ba0b8f2dc750e9b345d0/5ef4d21ddef12514bd88f799_notemockup.png']
      //           })
      //   });

       let product_creation_response = await fetch('http://localhost:3000/create-pricing', {
          method: 'POST',
          headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    price: 54 * 100,
                    currency: 'usd',
                    product_id: 'prod_JDPzaNCXpjXGum',
                    product_name: 'Full Service A4'
                })
        });

      let product_creation_response_data = await product_creation_response.json();

      if(product_creation_response_data.status != 'success') {
        console.log('product creation error :>>');
        return;
      }

       let checkout_response = await fetch('http://localhost:3000/create-checkout-session', {
          method: 'POST',
          headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customer_id: 'cus_J8eSiEYReZNQfX',
                    payment_type: 'card',
                    line_items: [{
                      price: product_creation_response_data.price.id,
                      quantity: 1
                    }],
                    mode: 'payment',
                    success_url: 'http://localhost:8080/campaign/hhg62jjuytk',
                    cancel_url: 'http://localhost:8080/campaign/hhg62jjuytk'
                })
        });

        let checkout_response_data = await checkout_response.json();

        if(checkout_response_data.status == 'success') {
          return that.checkoutRef.redirectToCheckout({ sessionId: checkout_response_data.id });
        }

    },
  },
};
</script>