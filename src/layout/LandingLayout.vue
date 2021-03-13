<template>
  <div>
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter
  }
};
</script>

<style lang="scss" scoped></style>
