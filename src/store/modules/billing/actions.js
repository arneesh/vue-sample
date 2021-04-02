export default {

    getInvoices: (context, data) => {

        fetch(`http://localhost:3000/invoices/${ data.stripeCustomerId }`, {
            method: 'GET',
            headers: {
                        'Content-Type': 'application/json'
                    }
            }).then((response) => response.json()).then((data) => {

            let invoicesList = data.invoices;

            if(data.status =="success"){
                context.commit('getInvoices', invoicesList);
            }

        }).catch((err) => {
            console.log('err :>> ', err);
        });


    },
    
};
