<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <!-- Tabs with icons -->
      <div class="mb-3">
        <small class="text-uppercase font-weight-bold">With icons</small>
      </div>
      <tabs fill class="flex-column flex-md-row">
        <card shadow slot-scope="{  }">
          <tab-pane key="tab1">
            <template slot="title">
              <i class="ni ni-cloud-upload-96 mr-2"></i>Home
            </template>

            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat..
            </p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat..
            </p>
          </tab-pane>

          <tab-pane key="tab2">
            <template slot="title">
              <i class="ni ni-bell-55 mr-2"></i>Profile
            </template>

            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </tab-pane>

          <tab-pane key="tab3">
            <template slot="title">
              <i class="ni ni-calendar-grid-58 mr-2"></i>Messages
            </template>

            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </tab-pane>
        </card>
      </tabs>
    </div>
    <div class="col-lg-6 mt-5 mt-lg-0">
      <!-- Menu -->
      <div class="mb-3">
        <small class="text-uppercase font-weight-bold">With text</small>
      </div>
      <tabs fill class="flex-column flex-md-row">
        <card shadow>
          <tab-pane title="Home">
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </tab-pane>

          <tab-pane title="Profile">
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </tab-pane>

          <tab-pane title="Messages">
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </tab-pane>
        </card>
      </tabs>
    </div>
  </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  components: {
    Tabs,
    TabPane
  }
};
</script>
<style></style>
