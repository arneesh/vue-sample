<template>
  <div>
    <b-row>
      <b-col md="2">
        <sidebar />
      </b-col>
      <b-col md="10">
        <dashboard-header />
        <b-container align-v="center">
          <slot />
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DashboardHeader from "./DashboardHeader.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    "dashboard-header": DashboardHeader,
    sidebar: Sidebar
  }
};
</script>

<style lang="scss" scoped></style>
