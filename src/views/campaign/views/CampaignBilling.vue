<template>
  <div>
    <b-row class="mt-5">
      <b-col md="12" align="left">
        <h3>Billing</h3>
      </b-col>
    </b-row>
    <hr/>

    <h6 class="text-left">Select Billing Type</h6>
    <billing-type :disabledSection="disabled_section"  />
    <hr/>

    <template v-if="getBillingType == 'subscription_billing'">
        <note-count-slider class="mt-5" />
    <hr/>
    </template>
    

    <h6 class="text-left mt-5">Select Payment Method</h6>

    <payment-methods /> 

    <b-row class="mt-5">
      <b-col class="md-12">
          <template v-if="getPaymentType =='pay_by_card'"> 
        <b-link
          :to="{ name: 'CampaignSavedPaymentMethods', params: { 'campaignId': campaignId, 'stripeCustomerId': stripe_customer_id } }"
          class="btn btn-primary"
        >
          Next
          <i class="fa fa-arrow-right"></i>
        </b-link>
          </template>
          <template v-if="getPaymentType =='pay_by_invoice'">
         <b-link
          :to="{ name: 'PayByInvoice', params: { 'campaignId': campaignId, 'stripeCustomerId': stripe_customer_id } }"
          class="btn btn-primary"
        >
          Next
          <i class="fa fa-arrow-right"></i>
        </b-link>
          </template>


      </b-col>
    </b-row>
    
  </div>
</template>

<script>
import BillingType from "../../containers/billing/BillingType.vue";
import PaymentMethods from "../../containers/billing/PaymentMethods.vue";
import NoteCountSlider from "../../containers/billing/NoteCountSlider.vue";

import { mapGetters } from "vuex";


// Disable one off when
//  sender=='Print Now' && data_source=='audience'
//  sender=='Print Now' && data_source=='api_crm'
//  sender='Print on Request' && data_source='audience'
//  sender='Print on Request' && data_source='api_crm'
//  sender='Shop for Me' && data_source='api_crm'


// allow both one off and subscription when
//  sender='Ship for me' && delivery='audience'
//  sender='Ship to me' && delivery='audience'

// disable subscription when
// sender='Ship to me' && data_source='audience' && envelope_required='No Envelope'
// sender='Ship to me' && data_source='audience' &&  products_enabled. includes('printed_envelopes_only')




// const STATIONERY_OPTIONS = {
//   'printed_envelopes_only': 'Printed Envelopes Only',
// }
//
// user.products_enabled in printed_envelopes_only
//
// 


  // ENVELOPE_REQUIRED: {
  //   'yes': 'Envelope',
  //   'no': 'No Envelope'
  // },




// PRODUCT_TYPES = {
//   on_demand: 'On Demand',
//   full_service: 'Full Service'
// }

//  SENDER: {
//     'ship_for_me': 'Ship for me',
//     'ship_to_self': 'Ship to self',
//     'download_files': 'Download Files',
//     'print_on_request': 'Print on Request',
//     'print_now': 'Print Now'
//   },

  // DATA_SOURCE: {
  //   'upload': 'Upload',
  //   'api_crm': 'API / CRM',
  //   'audience': 'Audience',
  // },

// Mailed = Ship for me
// Print Now = Print Now
// Triggered Print = Print on Request
// Tracked = Ship to me

//Integration = api_crm



export default {
  data: function() {
    return {
        user: {
        sender: 'Print Now',
        product: 'Full Service',
        data_source: 'audience',
        products_enabled: ''
        },
        stripe_customer_id: 'cus_J8eSiEYReZNQfX',
        disabled_section: 'one_off_billing'

    }
  },
  props: {
    campaignId: {
      required: true
    }
  },
  components: {
    "billing-type": BillingType,
    "payment-methods": PaymentMethods,
    "note-count-slider": NoteCountSlider
  },
  computed: {
    ...mapGetters(['getBillingType', 'getPaymentType']),
  },
  mounted() {


    // Disable One Off Billing
    if(this.user.sender == 'Print Now' && this.user.data_source == 'audience') {
      this.disabled_section = 'one_off_billing';
    }

    if(this.user.sender == 'Print Now' && this.user.data_source == 'api_crm') {
      this.disabled_section = 'one_off_billing';
    }

    if(this.user.sender == 'Print on Request' && this.user.data_source == 'audience') {
      this.disabled_section = 'one_off_billing';
    }

    if(this.user.sender == 'Print on Request' && this.user.data_source == 'api_crm') {
      this.disabled_section = 'one_off_billing';
    }

    if(this.user.sender == 'Ship for Me' && this.user.data_source == 'api_crm') {
      this.disabled_section = 'one_off_billing';
    }

    // Diable None

    if(this.user.sender == 'Ship for me' && this.user.data_source=='audience') {
      this.disabled_section == '';
    }

    if(this.user.sender == 'Ship to me' && this.user.data_source=='audience') {
      this.disabled_section == '';
    }

  // Disable Subscription Billing

  if(this.user.sender == 'Ship to me'  && this.user.data_source== 'audience' && this.user.envelope_required=='No Envelope') {
    this.disabled_section = 'subscription_billing';
  }

  if(this.user.sender == 'Ship to me'  && this.user.data_source== 'audience' && this.user.products_enabled.includes('printed_envelopes_only')) {
    this.disabled_section = 'subscription_billing';
  }
    
  }
};
</script>

<style lang="scss" scoped>
</style>