<template>
  <section>
    <div class="mt-5">
      <h1>campaign detaild page</h1>
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
