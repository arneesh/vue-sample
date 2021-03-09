<template>
  <div>
    <h1>Full Service Home</h1>
    <router-link to="/full-service/dashboard">Dashboard</router-link> |
    <router-link to="/full-service/campaigns">Campaigns</router-link>

    <full-service-dashboard />
  </div>
</template>

<script>
import FullServiceDashboard from "./views/FullServiceDashboard.vue";

export default {
  components: {
    "full-service-dashboard": FullServiceDashboard
  }
};
</script>

<style lang="scss" scoped></style>
