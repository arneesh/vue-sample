<template>
  <div>
    <b-sidebar
      bg-variant="default"
      type="default"
      no-close-on-route-change
      visible
      no-header
      shadow
    >
      <template #footer="{  }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Footer</strong>
        </div>
      </template>
      <b-nav vertical class="w-25">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
