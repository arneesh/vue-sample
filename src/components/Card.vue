<template>
  <div>
    <b-card
      :title="user.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Job Info"
      img-top
      img-tag="article"
      style="max-width:20rem"
      footer="Card Footer"
    >
      <b-card-text>
        <b-card> Email: {{ user.email }} </b-card>
      </b-card-text>
      <b-button variant="primary"> Apply </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>

<style lang="scss" scoped></style>
