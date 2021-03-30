export default {
    getSavedPaymentMethods: (state, payload) => {
        state.savedPaymentMethodsList = payload;
    },
    getLoadingState: (state, payload) => {
        state.loading = payload;
    },
    selectBillingType: (state, payload) => {
        state.billingType = payload;
    },
    selectPaymentType: (state, payload) => {
        state.paymentType = payload;
    }
}