<template>
  <b-container align-v="center">
    <b-row>
      <b-col
        md="4"
        class="mb-3"
        v-for="(user, index) in users"
        v-bind:key="index"
      >
        <card :user="user" />
      </b-col>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  data() {
    return {
      users: [],
      currentPage: 1,
      rows: 1,
      perPage: 3
    };
  },
  components: {
    card: Card
  },
  methods: {
    fetchData: async function() {
      const res = await fetch("names.json");
      const dataList = await res.json();
      this.users = dataList;
      this.rows = this.users.length;
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
