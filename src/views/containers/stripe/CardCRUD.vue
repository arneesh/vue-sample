<template>
  <div>
    <b-button variant="default" @click.prevent="getCards">Get Cards List</b-button>
    <template v-if="cardList.length > 0" >
         <div v-for="(item, index) in cardList" v-bind:key="index">
             
      <p>Card number: **** **** **** {{item.last4}}</p>
      <p>Card Vendor: {{ item.brand}}</p>
             
         </div>
    </template>


    <b-button variant="primary" @click.prevent="addCard">Add Card</b-button>
    <b-button variant="danger" @click.prevent="deleteCard">Remove Card</b-button>

  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                cardList: [],
                customer_id: "cus_J8eSiEYReZNQfX"
            }
        },
        methods: {
            getCards: async function() {
                let response = await fetch(`http://localhost:3000/card-list/${ this.customer_id }`, {
                method: 'GET',
                headers: {
                            'Content-Type': 'application/json'
                        }
                });

                let data = await response.json();

                console.log('data :>> ', data);
                this.cardList = data.cardList.data || [];

                console.log('this.cardsList :>> ', this.cardsList);
            },
            addCard: async function() {
                
                let response = await fetch(`http://localhost:3000/add-card/${ this.customer_id }`, {
                method: 'POST',
                headers: {
                            'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                        source: 'tok_visa'
                    })
                });

                let data = await response.json();
                
            },
            deleteCard: async function() {
                
                let response = await fetch(`http://localhost:3000/remove-card/${ this.customer_id }`, {
                method: 'DELETE',
                headers: {
                            'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                        payment_method_id: 'card_1IYSukG0ZEpqH59YTdwzYYW1'
                    })
                });

                let data = await response.json();


                console.log('data :>> ', data);
                
            }
        }
        
    }
</script>

<style lang="scss" scoped>
</style>