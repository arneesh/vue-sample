<template>
  <b-container align-v="center">
    <b-row>
      <b-col md="4" class="mb-3">
        <b-button variant="light" class="mr-3" @click="prevPage">
          <b-icon icon="arrow-left"></b-icon>
        </b-button>
        <b-button variant="light">
          <b-icon icon="arrow-right"></b-icon>
        </b-button>
      </b-col>
      <b-col md="4" class="mb-3">
        <h1>On Demand Home</h1>
        <router-link to="/on-demand/dashboard">Dashboard</router-link> |
        <router-link to="/on-demand/campaigns">Campaigns</router-link>
      </b-col>
      <b-col md="4" class="mb-3"> </b-col>
    </b-row>

    <b-row>
      <b-col md="12">
        <on-demand-dashboard />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import OnDemandDashboard from "./views/OnDemandDashboard.vue";

export default {
  components: {
    "on-demand-dashboard": OnDemandDashboard
  },
  methods: {
    prevPage: function() {
      console.log(this.$router);
      this.$router.go(1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
