<template>
  <header>
    <base-nav
      key="default"
      type="default"
      effect="dark"
      expand
      content-id="`navbar-${default}`"
    >
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu" target="`navbar-${default}`">
          </close-button>
        </div>
      </div>
      <div>
        <h3 class="heading mb-0">
          <router-link class="text-white" to="/components"
            ><strong>Components</strong></router-link
          >
        </h3>
      </div>
      <dashboard-header-menu />
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import DashboardHeaderMenu from "./DashboardHeaderMenu.vue";

export default {
  components: {
    "dashboard-header-menu": DashboardHeaderMenu,
    BaseNav,
    CloseButton
  }
};
</script>
<style></style>
