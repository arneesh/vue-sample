<template>
  <div>
    <b-row class="mt-3">
      <b-col class="md-6">
        <b-card>
          <div>
            <b-row align-v="center">
              <b-col md="10" class="text-left">
                <h3 class="h5 text-primary font-weight-bold">One off project billing</h3>
                <small>Add a card to your accout for payments.</small>
              </b-col>
              <b-col md="2" class="text-right">
                <i class="fa fa-arrow-right"></i>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
      <b-col class="md-6">
        <b-card border-variant="primary">
          <div>
            <b-row align-v="center">
              <b-col md="10" class="text-left">
                <h3 class="h5 text-primary font-weight-bold">Setup subscription billing</h3>
                <small>Set Up monthly Invoice which will be sent to you.</small>
              </b-col>
              <b-col md="2" class="text-right">
                <i class="fa fa-arrow-right"></i>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col class="md-12">
        <b-link
          :to="{ name: 'CampaignDetails', params: { 'campaignId': campaign_id } }"
          class="btn btn-primary"
        >
          Next
          <i class="fa fa-arrow-right"></i>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>