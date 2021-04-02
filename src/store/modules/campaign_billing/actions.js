export default {
     getSavedPaymentMethods: (context, data) => {

        context.commit('getLoadingState', true);

        fetch(`http://localhost:3000/payment-methods-list/${ data.stripeCustomerId}/${data.paymentMethodType}`, {
            method: 'GET',
            headers: {
                        'Content-Type': 'application/json'
                    }
            }).then((response) => response.json()).then((data) => {

            let cardList = data.cardList.data || [];

            if(data.status =="success"){
                context.commit('getSavedPaymentMethods', cardList);
                context.commit('getLoadingState', false);
            }

        }).catch((err) => {
            console.log('err :>> ', err);
        });

    },

    getStripeCustomer: (context, data) => {

        fetch(`http://localhost:3000/customer/${ data.stripeCustomerId }`, {
            method: 'GET',
            headers: {
                        'Content-Type': 'application/json'
                    }
            }).then((response) => response.json()).then((data) => {

            let customerData = data.customer;

            if(data.status =="success"){
                context.commit('getStripeCustomer', customerData);
            }

        }).catch((err) => {
            console.log('err :>> ', err);
        });
    },


    selectBillingType: (context, value) => {
        context.commit('selectBillingType', value);
    },
    selectPaymentType: (context, value) => {
        context.commit('selectPaymentType', value);
    },
    selectCard: (context, value) => {
        context.commit('selectCard', value);
    }

}