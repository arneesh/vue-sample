<template>
  <div>
    <b-row class="mt-3">
      <b-col class="md-6">
        <b-card :bg-variant="disabled_section == 'one_off_billing' ? 'light' : ''" class="shadow" :border-variant="selectedBillingType == 'one_off_billing' ? 'primary' : null " >
          <div class="clickable" @click=" disabled_section == 'one_off_billing'  ? false : selectBillingType('one_off_billing')">
            <b-row align-v="center">
              <b-col md="10" class="text-left">
                <h3 class="h5 text-primary font-weight-bold">One off project billing</h3>
                <small>Add a card to your accout for payments.</small>
              </b-col>
              <b-col md="2" class="text-right" v-if="selectedBillingType == 'one_off_billing'">
                <i class="fa fa-arrow-right text-primary"></i>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
      <b-col class="md-6">
        <b-card :bg-variant="disabled_section == 'subscription_billing' ? 'light' : ''" class="shadow" :border-variant="selectedBillingType == 'subscription_billing' ? 'primary': null">
          <div class="clickable" @click=" disabled_section == 'subscription_billing'  ? false : selectBillingType('subscription_billing')">
            <b-row align-v="center">
              <b-col md="10" class="text-left">
                <h3 class="h5 text-primary font-weight-bold">Setup subscription billing</h3>
                <small>Set Up monthly Invoice which will be sent to you.</small>
              </b-col>
              <b-col md="2" class="text-right" v-if="selectedBillingType == 'subscription_billing'">
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
    data: function(){
        return {
            selectedBillingType: "one_off_billing"        }
    },
    props: {
      disabledSection: String
    },
    methods: {
        ...mapActions(["selectBillingType"]),
        selectBillingType: function(value){
            this.selectedBillingType = value;
            this.$store.dispatch("selectBillingType",value);
        },
    },
    computed: {
      disabled_section: function() {
        return this.disabledSection
      }
    },
    mounted() {

      if(this.disabled_section == 'one_off_billing') {
        this.selectedBillingType = 'subscription_billing'
      }

      if(this.disabled_section == 'subscription_billing') {
        this.selectedBillingType = 'one_off_billing'
      }

      this.$store.dispatch("selectBillingType",this.selectedBillingType);
    }
};
</script>

<style lang="scss" scoped>
div.clickable {
    cursor: pointer
}
</style>