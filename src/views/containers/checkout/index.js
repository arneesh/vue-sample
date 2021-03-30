import { loadStripeSdk } from './loadStripeSDK.js';
import CoercePropsMixin from 'vue-coerce-props';
import props from './props';
export default {
  props,
  mixins: [CoercePropsMixin],
  render (createElement) {
    return createElement('div');
  },
  methods: {
    redirectToCheckout (params) {
      this.$emit('loading', true);
      loadStripeSdk({
        version: 'v3',
        disableAdvancedFraudDetection: this.disableAdvancedFraudDetection,
      }, () => {
        try {
          const stripe = window.Stripe(this.pk);

          if (params.sessionId) {
            stripe.redirectToCheckout({
              sessionId: params.sessionId,
            });
            return;
          }

          if (this.lineItems && this.lineItems.length && !this.mode) {
            console.error('Error: Property \'mode\' is required when using \'lineItems\'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode');
            return;
          }

          const options = {
            billingAddressCollection: this.billingAddressCollection,
            cancelUrl: this.cancelUrl,
            clientReferenceId: this.clientReferenceId,
            customerEmail: this.customerEmail,
            items: this.items,
            lineItems: this.lineItems,
            locale: this.$coerced.locale,
            mode: this.mode,
            shippingAddressCollection: this.shippingAddressCollection,
            submitType: this.submitType,
            successUrl: this.successUrl,
          };

          stripe.redirectToCheckout(options);
        } catch (e) {
          console.error(e);
          this.$emit('Error Occured', e);
        } finally {
          this.$emit('Loading...', false);
        }
      });
    },
  },
};