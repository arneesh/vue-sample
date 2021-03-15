<template>
    <div>

            <template v-if="payment_methods.length > 0">
      <h3 class="h4 text-default font-weight-bold mb-4 text-left">Current Payment Methods</h3>
      <b-card class="mt-5" v-for="(payment_method,index) in payment_methods" v-bind:key="index">
        <div>
          <b-row>
            <b-col class="md-6 text-left">
              <h3 class="h5 text-primary font-weight-bold">{{ payment_method.card_number}}</h3>
              <small>Type: </small>
              <badge type="primary" class="text-uppercase">{{ payment_method.type}}</badge>
              <br />

              <small>{{ payment_method.added_on }}</small>
            </b-col>
            <b-col class="md-6 text-right">
              <base-button href="#" type="primary">
                View
                <i class="fa fa-arrow-right"></i>
              </base-button>

                <base-button  type="danger">
                    <i class="fa fa-trash"></i>
                Remove
              </base-button>

            </b-col>
          </b-row>
        </div>
      </b-card>
      <b-row class="mt-5">
        <b-col class="md-12">
                <base-button type="primary">
          <router-link class="text-white" :to="{ name: 'NewPaymentMethod'}">Add a New Payment Method</router-link>
            
            <i class="fa fa-arrow-right"></i>
          </base-button>          
          
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <h3 class="h4 text-default font-weight-bold mb-4">No Payment Method Setup</h3>

      <p class="description">
        No payment method is currently setup. You can setup a payment method using
        <span
          class="text-primary"
        >Pay By Card</span> option or
        <span class="text-primary">Monthly Invoice</span> method.
      </p>

      <base-button class="btn-3" type="primary">
          <router-link class="text-white" :to="{ name: 'SelectedPaymentMethod'}">Set Up Payment Method</router-link>
        <i class="fa fa-arrow-right"></i>
      </base-button>
    </template>

    </div>
</template>

<script>
    export default {
          data: function() {
    return {
      payment_methods: [
        {
          card_number: "**** **** **** 5567",
          added_on: "11 March 2021",
          type: "card"
        },
        {
          card_number: "**** **** **** 8875",
          added_on: "09 March 2021",
          type: "card"
        },
        {
          card_number: "**** **** **** 5543",
          added_on: "05 March 2021",
          type: "card"
        }
      ]
    };
  }
        
    }
</script>

<style lang="scss" scoped>

</style>