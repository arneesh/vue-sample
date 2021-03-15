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
      <b-nav vertical class=" " >
        <b-nav-item class="text-light">Active</b-nav-item>
      </b-nav>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
