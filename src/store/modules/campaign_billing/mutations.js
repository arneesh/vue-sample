export default {
    getSavedPaymentMethods: (state, payload) => {
        state.savedPaymentMethodsList = payload;
    },
    getStripeCustomer: (state, payload) => {
        state.customerData = payload;
    },
    getLoadingState: (state, payload) => {
        state.loading = payload;
    },
    selectBillingType: (state, payload) => {
        state.billingType = payload;
    },
    selectPaymentType: (state, payload) => {
        state.paymentType = payload;
    },
    selectCard: (state, payload) => {
        state.selectedCard = payload;
    }
}