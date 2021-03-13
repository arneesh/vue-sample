import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FullServiceHome from "../views/full_service/FullServiceHome.vue";
import OnDemandHome from "../views/on_demand/OnDemandHome.vue";

import FullServiceCampaigns from "../views/full_service/views/FullServiceCampaigns.vue";
import FullServiceDashboard from "../views/full_service/views/FullServiceDashboard.vue";

import OnDemandCampaigns from "../views/on_demand/views/OnDemandCampaigns.vue";
import OnDemandDashboard from "../views/on_demand/views/OnDemandDashboard.vue";

import Billing from "../views/billing/Billing.vue";

import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";

import DashboardLayout from "../layout/DashboardLayout.vue";
import LandingLayout from "../layout/LandingLayout.vue";

import Components from "../views/Components.vue";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
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
  },

  {
    path: "/billing",
    name: "billing",
    components: {
      default: Billing
    },
    meta: { layout: DashboardLayout }
  },

  {
    path: "/components",
    name: "components",
    components: {
      default: Components,
      footer: AppFooter
    }
  },
  {
    path: "/",
    name: "landing",
    components: {
      default: Landing
    },
    meta: { layout: LandingLayout }
  },
  {
    path: "/login",
    name: "login",
    components: {
      default: Login
    },
    meta: { layout: LandingLayout }
  },
  {
    path: "/register",
    name: "register",
    components: {
      default: Register
    },
    meta: { layout: LandingLayout }
  },
  {
    path: "/profile",
    name: "profile",
    components: {
      default: Profile
    },
    meta: { layout: LandingLayout }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
