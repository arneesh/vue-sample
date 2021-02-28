<template>
  <div>
    <b-card
      :title="user.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Job Info"
      img-top
      img-tag="article"
      style="max-width:20rem"
      footer="Foter"
    >
      <b-card-text>
        <b-card>
          Email: {{ user.email }} <br />
          <b> {{ count }}</b>
        </b-card>
      </b-card-text>
      <b-button class="mb-3" variant="primary" @click="increment(10)"
        ><b>Increment</b>
      </b-button>

      <b-form-rating
        v-model="rating_value"
        variant="warning"
        class="mb-2"
      ></b-form-rating>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  props: {
    user: Object
  },
  data() {
    return {
      rating_value: 1
    };
  },
  computed: {
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters({})
  },
  methods: {
    increment: function(value) {
      this.$store.commit("increment", {
        amount: value
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
