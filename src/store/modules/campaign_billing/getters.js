export default {
    getSavedPaymentMethodsList: state => {
        return state.savedPaymentMethodsList;
    },
    getCustomerData: state => {
        return state.customerData;
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