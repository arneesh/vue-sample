<template>
    <div>
        <b-button variant="primary" @click.prevent="createInvoice">Pay Now</b-button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                customer_id: "cus_J8eSiEYReZNQfX"
            }
        },
        methods: {
            createInvoice: async function () {
                
                let product_creation_response = await fetch('http://localhost:3000/create-product-pricing', {
                    method: 'POST',
                    headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                campaign_id: 'campaign_id_55',
                                campaign_name: 'Sample Campaign',
                                price: 44 * 100,
                                currency: 'usd',
                                images: ['https://uploads-ssl.webflow.com/5e99ba0b8f2dc750e9b345d0/5ef4d21ddef12514bd88f799_notemockup.png']
                            })
                    });

                let product_creation_response_data = await product_creation_response.json();

                if(product_creation_response_data.status != 'success') {
                    console.log('product creation error');
                    return;
                }

                let response = await fetch(`http://localhost:3000/invoice-create/${ this.customer_id }`, {
                method: 'POST',
                headers: {
                            'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                        collection_method: 'send_invoice',
                        days_until_due: 30,
                        price: product_creation_response_data.price
                    })
                });

                let data = await response.json();

                if(data.status =='success') {

                    this.$bvToast.toast(`Invoice sent successfully.`, {
                    title: 'Success',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 5000,
                    })

                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>