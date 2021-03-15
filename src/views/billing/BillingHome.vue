<template>
  <section>
    <div class="mt-5">

  <b-breadcrumb>
        <b-breadcrumb-item v-for="(route,index) in $route.matched" v-bind:key="index" :route=route>Foo</b-breadcrumb-item>

  </b-breadcrumb>


      <tabs fill class="flex-column flex-md-row">
        <card shadow slot-scope="{  }">
          <tab-pane key="tab1">
            <template slot="title">

            <i class="fa fa-area-chart"></i>

              Overview
            </template>
            <overview />
          </tab-pane>

          <tab-pane key="tab2">
            <template slot="title">
                  <i class="fa fa-list-alt"></i>
              Billing
            </template>

            <billing />
          </tab-pane>
        </card>
      </tabs>
    </div>
  </section>
</template>

<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Overview from "./views/Overview.vue";
import Billing from "./views/Billing.vue";

export default {
  data: function() {
    return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
    };
  },
  components: {
    "tabs": Tabs,
    "tab-pane": TabPane,
    "overview": Overview,
    "billing": Billing
  },
  mounted() {
    console.log("ROUTEE", this.$route);
    console.log("Router", this.$router)
  }
};
</script>

<style lang="scss" scoped></style>
