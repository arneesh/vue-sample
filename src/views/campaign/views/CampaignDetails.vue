<template>
  <section>
    <div class="mt-5">
      <b-row>
        <b-col md="4">
          <h3 class="mr-5">Sample Campaign</h3>
        </b-col>
        <b-col md="8" align="left">
          <b-button size="sm" pill variant="outline-warning">Awaiting for Payment</b-button>
        </b-col>
      </b-row>

      <b-row class="mt-5" align="left">
        <b-col md="12">
          <b-row>
            <b-col md="6">
              <h6>
                Created:
                <span class="text-primary">22 march 2021</span>
              </h6>
            </b-col>
            <b-col md="6">
              <h6>
                Due:
                <span class="text-primary">30 march 2021</span>
              </h6>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="12">
              <b-button size="sm" variant="outline-primary">View Invoice</b-button>
              <b-button size="sm" variant="outline-primary">Duplicate</b-button>
            </b-col>
            <b-col class="mt-3 ml-5" >
              <b-button size="sm" variant="outline-primary">Enable Testing</b-button>
            </b-col>
          </b-row>
          
        </b-col>
      </b-row>
    </div>
    <div class="mt-5">
      <b-alert show variant="secondary">
        <h4 class="alert-heading">Almost done!</h4>
        <p>
          Note: The campaign is currently in
          <span variant="warning">Awaiting for Payment</span> state. To send the notes to
          <span variant="primary">Print State</span>, kindly complete the payment for the campaign.
        </p>
        <hr />
          <b-link
            :to="{ name: 'CampaignBilling', params: { 'campaignId': campaignId } }"
            class="btn btn-primary"
          >
            Pay Now
            <i class="fa fa-arrow-right"></i>
          </b-link>
      </b-alert>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    campaignId: {
      required: true
    }
  },
  components: {},
  mounted() {
    console.log("Inside cmapaign details", this.$route);
  }
};
</script>

<style lang="scss" scoped></style>
