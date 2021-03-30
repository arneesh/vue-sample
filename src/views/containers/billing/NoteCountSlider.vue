<template>
  <div>
    <b-row>
      <b-col align="left" md="12">
        <h6>What is the maximim number of notes you will need each month?</h6>
        <span
          class="text-muted"
        >Don't worry if you're not exactly sure. All unused credits will roll over to the next month and if you think you're running low, you can start your next billing period early.</span>
      </b-col>
      <b-col md="4" align="left" class="mt-3">
        <h6 class="mt-3">
          Note Count:
          <span class="text-primary">{{ note_count }}</span>
        </h6>
      </b-col>
      <b-col md="8" align="left" class="mt-3">
        <b-row>
          <b-col md="4">
            <h6 class="mt-3">Enter Manually:</h6>
          </b-col>
          <b-col md="8">
            <base-input class="note_count" v-model="note_count" alternative></base-input>
          </b-col>
        </b-row>
      </b-col>

      <b-col>
        <b-input-group prepend="0" :append="max_note_count" class="mt-3">
          <b-form-input
            style="height:50px"
            v-model="note_count"
            type="range"
            min="0"
            :max="max_note_count"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col md="4">
        <b-card class="shadow">
          <span>
            <h2 class="display-4 text-muted">Maximum Quantity</h2>
            <h2 class="display-4 text-primary">{{max_note_count}}</h2>
            <span class="text-muted">per month</span>
          </span>
        </b-card>
      </b-col>
      <b-col md="4">
          <b-card class="shadow">
          <span>
            <h2 class="display-4 text-muted">Cost per unit</h2>
            <h2 class="display-4 text-primary">${{cost_per_unit}}</h2>
            <span class="text-muted">excluding stamps</span>
          </span>
        </b-card>
      </b-col>
      <b-col md="4">
          <b-card class="shadow">
          <span>
            <h2 class="display-4 text-muted">Monthly Cost</h2>
            <h2 class="display-4 text-primary">${{ (note_count * cost_per_unit).toFixed(2) }}</h2>
            <span class="text-muted">excluding stamps</span>
          </span>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      note_count: 500,
      cost_per_unit: 2.10,
      max_note_count: '1500'
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>