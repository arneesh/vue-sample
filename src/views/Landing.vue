<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">
                  Scribeless
                  <span>The Handwriting Company</span>
                </h1>
                <p class="lead  text-white">
                  Generate an retain more business with handwritten notes.
                  Bringing back personalization to the world.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href=""
                    class="mb-3 mb-sm-0"
                    type="info"
                    icon="fa fa-code"
                  >
                    <router-link to="components" class="text-white"
                      >Components</router-link
                    >
                  </base-button>
                  <base-button
                    tag="a"
                    href=""
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="fa fa-code"
                  >
                    <router-link to="containers">Containers</router-link>
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-check-bold"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">Full Service</h6>
                  <p class="description mt-3">
                    Create note, envelopes nad get them shipped to your desired
                    address.
                  </p>
                  <div>
                    <badge type="primary" rounded>ship for me</badge>
                    <badge type="primary" rounded>ship to me</badge>
                  </div>
                  <base-button tag="a" href="#" type="primary" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-ruler-pencil"
                    type="success"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-success text-uppercase">On Demand</h6>
                  <p class="description mt-3">
                    Use our handwriting engine and print notes using your own
                    printers.
                  </p>
                  <div>
                    <badge type="success" rounded>print now</badge>
                    <badge type="success" rounded>print on request</badge>
                  </div>
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-active-40"
                    type="warning"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-warning text-uppercase">Gift Note</h6>
                  <p class="description mt-3">
                    Create gift note using our Drop In Stationery editor in your
                    app.
                  </p>
                  <div>
                    <badge type="warning" rounded>shopify</badge>
                    <badge type="warning" rounded>web app</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-lg-1">
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon
                    name="ni ni-satisfied"
                    gradient="success"
                    color="white"
                    shadow
                    rounded
                  ></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">Customer Support</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat.
                  </p>
                  <a href="#" class="text-success">Learn more</a>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon
                    name="ni ni-atom"
                    gradient="warning"
                    color="white"
                    shadow
                    rounded
                  ></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Indepth Onboarding</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat.
                  </p>
                  <a href="#" class="text-warning">Learn more</a>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-0">
      <div class="container">
        <card gradient="warning" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">Our recently posted blog.</h3>
                <p class="lead text-white mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat.
                </p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <base-button tag="a" href="" type="white" block size="lg">
                  View Now
                </base-button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">Build something</h2>
            <p class="lead text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </div>
        </div>
        <div class="row row-grid mt-5">
          <div class="col-lg-4">
            <icon
              name="ni ni-settings"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Full Service</h5>
            <p class="text-white mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-ruler-pencil"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">On Demand</h5>
            <p class="text-white mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni-active-40"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Gift Note</h5>
            <p class="text-white mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">
              Scribeless
              <span class="text-success"
                >Brining personalization to the world.</span
              >
            </h2>
            <p class="lead">Full Service and On Demand</p>
            <div class="btn-wrapper">
              <a href="" class="btn btn-primary mb-3 mb-sm-0">Sign Up Now!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
