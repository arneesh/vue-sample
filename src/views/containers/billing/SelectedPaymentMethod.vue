<template>
  <div>
      <b-row class="mt-3">
        <b-col class="md-12">
          <b-card v-if="paymentMethod == 'pay_by_invoice'">
            <div>
              <b-row align-v="center">
                <b-col md="12" class="text-left">
                  <small class="font-weight-bold">Email on which email is sent.</small>
                  <b-row class="mt-3">
                    <b-col md="8">
                      <base-input alternative placeholder="arneesh@scribeless.co"></base-input>
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
          <b-card v-if="paymentMethod == 'pay_by_card'">
            <div>
              <b-row align-v="center">
                <b-col md="12" class="text-left">
                  <small class="font-weight-bold">Pay using this card</small><br/>
                  <small class="font-weight-bold">Vendor: </small>
                  <small class="font-weight-bold text-primary">Visa</small>
                  <b-row class="mt-3">
                    <b-col md="8">
                      <base-input alternative placeholder="**** **** **** 4242"></base-input>
                    </b-col>
                    <b-col md="4">
                      <base-button type="primary">Pay Now</base-button>
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

data: function() {
    return {};
  },
  props: {
    paymentMethod: {
      required: true,
      type: String
    }
  },
};
</script>

<style lang="scss" scoped>
</style>