<template>
  <div>
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
      <b-row>
      <b-col md="12" >
        <div class="col-lg-6 btn-wrapper">
          <router-link to="/">
            <a
              target="_blank"
              rel="noopener"
              class="btn btn-neutral btn-icon-only btn-round btn-lg"
              data-toggle="tooltip"
            >
              <i class="fa fa-arrow-left"></i>
            </a>
          </router-link>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
                      <h2 class="display-3 text-success">Billing/Payment Containers</h2>
        <b-container >
          <b-card>
            <h2 class="display-4 text-left">Billing Type</h2>
            <billing-type />

            <h2 class="display-4 mt-5 text-left ">Payment Methods</h2>
            <payment-methods />

            <h2 class="display-4 mt-5 text-left">Saved Payment Methods : Default</h2>
            <saved-payment-methods />

            <h2 class="display-4 mt-5 text-left">Saved Payment Methods :  Allow Remove</h2>
            <saved-payment-methods allowRemove=true />

            <h2 class="display-4 mt-5 text-left">Selected Payment Method : pay_by_invoice</h2>
            <selected-payment-method paymentMethod="pay_by_invoice" />

            <h2 class="display-4 mt-5 text-left">Selected Payment Method : pay_by_card</h2>
            <selected-payment-method paymentMethod="pay_by_card" />
          </b-card>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BillingType from "./containers/billing/BillingType.vue";
import PaymentMethods from "./containers/billing/PaymentMethods.vue";
import SavedPaymentMethods from "./containers/billing/SavedPaymentMethods.vue";
import SelectedPaymentMethod from "./containers/billing/SelectedPaymentMethod.vue";

export default {
  components: {
    "billing-type": BillingType,
    "payment-methods": PaymentMethods,
    "saved-payment-methods": SavedPaymentMethods,
    "selected-payment-method": SelectedPaymentMethod
  }
};
</script>

<style lang="scss" scoped>
</style>