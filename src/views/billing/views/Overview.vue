<template>
    <div>

                    <div class="row">
              <div class="col-md-12">
                <h3 class="h4 text-default font-weight-bold mb-4 text-left">Billing Stats</h3>
                <area-chart :width="900" />
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <h3 class="h4 text-default font-weight-bold mb-4 text-left">Recently Sent Campaigns</h3>
                <b-list-group>
                  <b-list-group-item
                    class="flex-column align-items-start"
                    v-for="(item, index) in recent_campaign_list"
                    v-bind:key="index"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      
                      <h3 class="h4 text-primary font-weight-bold mb-4 text-left">{{ item.campaign_name }}</h3>


                      <small>{{ item.sent_on }}</small>
                    </div>

                    <p class="mb-1 text-left">
                      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
                      eget risus varius blandit.
                    </p>
                  </b-list-group-item>
                </b-list-group>
              </div>
            </div>

    </div>
</template>

<script>
import AreaChart from "./AreaChart.vue";

    export default {
          data: function() {
    return {
      recent_campaign_list: [
        {
          campaign_name: "Campaign 1",
          sent_on: "3 days ago"
        },
        {
          campaign_name: "Campaign 2",
          sent_on: "4 days ago"
        },
        {
          campaign_name: "Campaign 3",
          sent_on: "6 days ago"
        }
      ]
    };
  },
        components: {
                "area-chart": AreaChart,

        }
        
    }
</script>

<style lang="scss" scoped>

</style>