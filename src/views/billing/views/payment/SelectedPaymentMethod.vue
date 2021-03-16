<template>
  <div>
    <b-row class="mt-3">
      <b-col class="md-12">
        <b-card v-if="payment_method_selected == 'pay_by_invoice'">
          <div>
            <b-row align-v="center">
              <b-col md="12" class="text-left">
                <small class="font-weight-bold">Email on which email is sent.</small>
                <b-row class="mt-3">
                  <b-col md="8">
                    <base-input alternative placeholder="Regular"></base-input>
                  </b-col>
                  <b-col md="4">
                    <base-button type="primary">Update</base-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <small>
              <span class="font-weight-bold">Note:</span> All your payment details and card information is stored completely securly via Stripe Payment Gateway.
            </small>
          </div>
        </b-card>
        <b-card v-if="payment_method_selected == 'pay_by_card'">
          <div>
            <b-row align-v="center">
              <b-col md="12" class="text-left">
                <small class="font-weight-bold">Email on which email is sent.</small>
                <b-row class="mt-3">
                  <b-col md="8">
                    <base-input alternative placeholder="Regular"></base-input>
                  </b-col>
                  <b-col md="4">
                    <base-button type="primary">Update</base-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <small>
              <span class="font-weight-bold">Note:</span> All your payment details and card information is stored completely securly via Stripe Payment Gateway.
            </small>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {

    computed: {
        payment_method_selected: function()  {
            return this.$route.params.paymentMethodSelected;

        }
    },

    created() {
        console.log("HAHHAHA", this.$route);
    }
};
</script>

<style lang="scss" scoped>
</style>