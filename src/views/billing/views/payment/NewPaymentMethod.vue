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
      <b-col class="md-6">
        <b-card>
          <div>
            <b-row align-v="center">
              <b-col md="10" class="text-left">
                <h3 class="h5 text-primary font-weight-bold">Pay Using Card</h3>
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
                <h3 class="h5 text-primary font-weight-bold">Monthly Recurring Invoice</h3>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>