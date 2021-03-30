<template>
  <div>
    <b-row>
      <b-col md="12" class="text-left">
        <div class="col-lg-6 text-lg-left btn-wrapper">
          <router-link :to="{ name: 'Payments'}">
            <a
              target="_blank"
              rel="noopener"
              class="btn btn-neutral btn-icon-only btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Follow me"
            >
              <i class="fa fa-arrow-left"></i>
            </a>
          </router-link>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col class="md-12">
    <payment-methods /> 

      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col class="md-12">
         <b-link
          :to="{ name: 'SelectedPaymentMethod', params: {  paymentMethodSelected: 'pay_by_card' } }"
          class="btn btn-primary"
        >
          Set Up Payment
          <i class="fa fa-arrow-right"></i>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PaymentMethods from '../../../containers/billing/PaymentMethods.vue';

export default {



  components: {
        "payment-methods": PaymentMethods,

  }

};
</script>

<style lang="scss" scoped>
</style>