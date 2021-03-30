export default {
     getSavedPaymentMethods: (context, data) => {

        context.commit('getLoadingState', true);

        fetch(`http://localhost:3000/card-list/${ data.stripeCustomerId }`, {
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
    selectBillingType: (context, value) => {
        context.commit('selectBillingType', value);
    },
    selectPaymentType: (context, value) => {
        context.commit('selectPaymentType', value);
    }

}