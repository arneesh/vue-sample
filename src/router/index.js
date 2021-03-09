import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FullServiceHome from "../views/full_service/FullServiceHome.vue";
import OnDemandHome from "../views/on_demand/OnDemandHome.vue";

import FullServiceCampaigns from "../views/full_service/views/FullServiceCampaigns.vue";
import FullServiceDashboard from "../views/full_service/views/FullServiceDashboard.vue";

import OnDemandCampaigns from "../views/on_demand/views/OnDemandCampaigns.vue";
import OnDemandDashboard from "../views/on_demand/views/OnDemandDashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/full-service",
    name: "FullServiceHome",
    component: FullServiceHome
  },
  {
    path: "/on-demand",
    name: "OnDemandHome",
    component: OnDemandHome
  },
  {
    path: "/full-service/campaigns",
    name: "FullServiceCampaigns",
    component: FullServiceCampaigns
  },
  {
    path: "/full-service/dashboard",
    name: "FullServiceDashboard",
    component: FullServiceDashboard
  },
  {
    path: "/on-demand/campaigns",
    name: "OnDemandCampaigns",
    component: OnDemandCampaigns
  },
  {
    path: "/on-demand/dashboard",
    name: "OnDemandDashboard",
    component: OnDemandDashboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
