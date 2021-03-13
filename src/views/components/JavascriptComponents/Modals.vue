<template>
  <!-- Modals -->
  <div class="row">
    <div class="col-md-4">
      <base-button
        block
        type="primary"
        class=" mb-3"
        @click="modals.modal1 = true"
      >
        Default
      </base-button>
      <modal :show.sync="modals.modal1">
        <h6 slot="header" class="modal-title" id="modal-title-default">
          Type your modal title
        </h6>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat..
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat..
        </p>

        <template slot="footer">
          <base-button type="primary">Save changes</base-button>
          <base-button
            type="link"
            class="ml-auto"
            @click="modals.modal1 = false"
            >Close
          </base-button>
        </template>
      </modal>
    </div>
    <div class="col-md-4">
      <base-button
        block
        type="warning"
        class=" mb-3"
        @click="modals.modal2 = true"
      >
        Notification
      </base-button>

      <modal
        :show.sync="modals.modal2"
        gradient="danger"
        modal-classes="modal-danger modal-dialog-centered"
      >
        <h6 slot="header" class="modal-title" id="modal-title-notification">
          Your attention is required
        </h6>

        <div class="py-3 text-center">
          <i class="ni ni-bell-55 ni-3x"></i>
          <h4 class="heading mt-4">You should read this!</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat..
          </p>
        </div>

        <template slot="footer">
          <base-button type="white">Ok, Got it</base-button>
          <base-button
            type="link"
            text-color="white"
            class="ml-auto"
            @click="modals.modal2 = false"
          >
            Close
          </base-button>
        </template>
      </modal>
    </div>
    <div class="col-md-4">
      <base-button
        block
        type="default"
        class=" mb-3"
        @click="modals.modal3 = true"
      >
        Form
      </base-button>

      <modal
        :show.sync="modals.modal3"
        body-classes="p-0"
        modal-classes="modal-dialog-centered modal-sm"
      >
        <card
          type="secondary"
          shadow
          header-classes="bg-white pb-5"
          body-classes="px-lg-5 py-lg-5"
          class="border-0"
        >
          <template>
            <div class="text-muted text-center mb-3">
              <small>Sign in with</small>
            </div>
            <div class="btn-wrapper text-center">
              <base-button type="neutral">
                <i class="fa fa-github"></i>
                Github
              </base-button>

              <base-button type="neutral">
                <i class="fa fa-google"></i>
                Google
              </base-button>
            </div>
          </template>
          <template>
            <div class="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <form role="form">
              <base-input
                alternative
                class="mb-3"
                placeholder="Email"
                addon-left-icon="ni ni-email-83"
              >
              </base-input>
              <base-input
                alternative
                type="password"
                placeholder="Password"
                addon-left-icon="ni ni-lock-circle-open"
              >
              </base-input>
              <base-checkbox>
                Remember me
              </base-checkbox>
              <div class="text-center">
                <base-button type="primary" class="my-4">Sign In</base-button>
              </div>
            </form>
          </template>
        </card>
      </modal>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false
      }
    };
  }
};
</script>
<style></style>
