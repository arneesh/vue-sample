import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FullServiceHome from "../views/full_service/FullServiceHome.vue";
import OnDemandHome from "../views/on_demand/OnDemandHome.vue";

import FullServiceCampaigns from "../views/full_service/views/FullServiceCampaigns.vue";
import FullServiceDashboard from "../views/full_service/views/FullServiceDashboard.vue";

import OnDemandCampaigns from "../views/on_demand/views/OnDemandCampaigns.vue";
import OnDemandDashboard from "../views/on_demand/views/OnDemandDashboard.vue";

import BillingHome from "../views/billing/BillingHome.vue";
import NewPaymentMethod from "../views/billing/views/payment/NewPaymentMethod.vue";
import SelectedPaymentMethod from "../views/billing/views/payment/SelectedPaymentMethod.vue";
import Payments from "../views/billing/views/payment/Payments.vue";

import CampaignHome from "../views/campaign/CampaignHome.vue";
import CreateCampaign from "../views/campaign/views/CreateCampaign.vue";
import CampaignDetails from "../views/campaign/views/CampaignDetails.vue";
import CampaignBilling from '../views/campaign/views/CampaignBilling.vue';
import CampaignSavedPaymentMethods from '../views/campaign/views/billing/CampaignSavedPaymentMethods.vue';
import AddNewCard from '../views/campaign/views/billing/AddNewCard.vue';
import PayByCard from '../views/campaign/views/billing/PayByCard.vue';
import PayByInvoice from '../views/campaign/views/billing/PayByInvoice.vue';

import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";

import DashboardLayout from "../layout/DashboardLayout.vue";
import LandingLayout from "../layout/LandingLayout.vue";

import Components from "../views/Components.vue";
import Containers from "../views/Containers.vue";
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
      default: BillingHome
    },
    meta: { layout: DashboardLayout },
    children: [
      {
        path: "",
        component: Payments,
        name: "Payments",
        meta: { layout: DashboardLayout },
      },
      {
      path: "payment-method/new",
      component: NewPaymentMethod,
      name: "NewPaymentMethod",
      meta: { layout: DashboardLayout },
    },
      {
      path: "select-payment-method",
      component: SelectedPaymentMethod,
      name: "SelectedPaymentMethod",
      meta: { layout: DashboardLayout },
    },
  ]
  },

  {
    path: "/campaign",
    component: CampaignHome,
    meta: { layout: DashboardLayout },
    children: [
      {
        path: "",
        component: CreateCampaign,
        name: "campaign",
        meta: { layout: DashboardLayout },
        props: true
      },
      {
        path: "create",
        component: CreateCampaign,
        name: "CreateCampaign",
        meta: { layout: DashboardLayout },
        props: true

      },
      {
        path: ":campaignId",
        component: CampaignDetails,
        name: "CampaignDetails",
        meta: { layout: DashboardLayout },
        props: true
      },
      {
        path: ":campaignId/billing",
        component: CampaignBilling,
        name: "CampaignBilling",
        meta: { layout: DashboardLayout },
        props: true
      },
      {
        path: ":campaignId/billing/savedPaymentMethods/:stripeCustomerId",
        component: CampaignSavedPaymentMethods,
        name: "CampaignSavedPaymentMethods",
        meta: { layout: DashboardLayout },
        props: true
      },
      {
        path: ":campaignId/billing/addNewCard/:stripeCustomerId",
        component: AddNewCard,
        name: "AddNewCard",
        meta: { layout: DashboardLayout },
        props: true
      },
      {
        path: ":campaignId/billing/payByCard/:stripeCustomerId",
        component: PayByCard,
        name: "PayByCard",
        meta: { layout: DashboardLayout },
        props: true
      },
      {
        path: ":campaignId/billing/payByInvoice/:stripeCustomerId",
        component: PayByInvoice,
        name: "PayByInvoice",
        meta: { layout: DashboardLayout },
        props: true
      },

    ]
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
    path: "/containers",
    name: "containers",
    components: {
      default: Containers,
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
    return { x: 0, y: 0 };
  }
});

export default router;
