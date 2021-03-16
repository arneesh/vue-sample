<template>
  <div>
    <b-row>
      <b-col md="12">
        <b-card class="mt-5">
          <h3 class="h5 text-primary font-weight-bold">Create Campaign Page</h3>

          <b-link
            :to="{ name: 'CampaignDetails', params: { 'campaignId': campaign_id } }"
            class="btn btn-primary"
          >
            Next
            <i class="fa fa-arrow-right"></i>
          </b-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      campaign_id: 456
    };
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style lang="scss" scoped>
</style>