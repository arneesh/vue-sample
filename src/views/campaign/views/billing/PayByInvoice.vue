<template>
    <div>
    <b-row class="mt-5">
      <b-col md="12" align="left">
        <h3>Pay By Invoice</h3>
      </b-col>
    </b-row>

                <h6 class="text-left mt-5">Email on which invoice is sent</h6>
        <b-row class="mt-3">
          <b-col md="8">
            <base-input  v-model="user_email" alternative></base-input>
          </b-col>
          <b-col md="4">
              <b-button style="width:250px" variant="primary"> Update </b-button>
          </b-col>
        </b-row>

                <h6 class="text-left mt-5">Invoice address</h6>
        <b-row class="mt-3">
          <b-col md="8" >
            <base-input class="mr-2" style="width:200px;display:inline-block"  v-model="address_line_1" alternative></base-input>
            <base-input class="mr-2" style="width:200px;display:inline-block"  v-model="city" alternative></base-input>
            <base-input class="mr-2" style="width:200px;display:inline-block"  v-model="country" alternative></base-input>
          </b-col>
          <b-col md="4">
              <b-button style="width:250px" variant="primary"> Update</b-button>
          </b-col>
        </b-row>




    <b-row class="mt-3">
        <b-col md="12">




            <stripe-invoice />
        </b-col>
    </b-row>
    </div>
</template>

<script>
import StripeInvoice from '../../../containers/stripe/StripeInvoice.vue';


    export default {
        data: function() {
            return {
                user_email: 'test@scribeless.co',
                address_line_1: '123 street',
                city: 'San Francisco',
                country: 'United States'
            }
        },
        components: {
            "stripe-invoice": StripeInvoice
        }
        
    }
</script>

<style lang="scss" scoped>

</style>