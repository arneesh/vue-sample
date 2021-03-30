<template>
  <div>
    <b-row class="mt-3">
      <b-col class="md-6">
        <b-card  class="shadow" :border-variant="selectedPaymentMethod == 'pay_by_card' ? 'primary': null">
          <div class="clickable" @click="selectPaymentMethod('pay_by_card')">
            <b-row align-v="center">
              <b-col md="10" class="text-left">
                <h3 class="h5 text-primary font-weight-bold">Pay By Card</h3>
                <small>Add a card to your accout for payments.</small>
              </b-col>
              <b-col md="2" class="text-right" v-if="selectedPaymentMethod == 'pay_by_card'">
                <i class="fa fa-arrow-right text-primary"></i>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
      <b-col class="md-6">
        <b-card class="shadow" :border-variant="selectedPaymentMethod == 'pay_by_invoice' ? 'primary': null">
          <div class="clickable" @click="selectPaymentMethod('pay_by_invoice')">
            <b-row align-v="center">
              <b-col md="10" class="text-left">
                <h3 class="h5 text-primary font-weight-bold">Pay By Invoice</h3>
                <small>Set Up monthly Invoice which will be sent to you.</small>
              </b-col>
              <b-col md="2" class="text-right" v-if="selectedPaymentMethod =='pay_by_invoice'">
                <i class="fa fa-arrow-right text-primary"></i>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
            selectedPaymentMethod: "pay_by_card"
    };
  },
  methods: {
            ...mapActions(["selectPaymentType"]),
    selectPaymentMethod: function(value) {
            this.selectedPaymentMethod = value;
            this.$store.dispatch("selectPaymentType",value);
    }
  },
  mounted() {
      this.$store.dispatch("selectPaymentType",this.selectedPaymentMethod);
    }
};
</script>

<style lang="scss" scoped>
div.clickable {
    cursor: pointer
}
</style>