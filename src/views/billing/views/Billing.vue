<template>
  <div>
          <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
</style>