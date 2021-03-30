export default {
    getSavedPaymentMethodsList: state => {
        return state.savedPaymentMethodsList;
    },
    getLoadingState: state => {
        return state.loading;
    },
    getBillingType: state => {
        return state.billingType;
    },
    getPaymentType: state => {
        return state.paymentType;
    }
}