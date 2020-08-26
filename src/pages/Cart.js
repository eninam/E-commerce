import React, { Component } from 'react';
import CartList from '../components/CartList'
import {ProductConsumer} from '../context/context'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {toast} from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';

toast.configure();
class cart extends Component {
    
    async handleToken(token){
        const response = await axios.post('http://localhost:8080/checkout', {
            token
        });
        const {status} =  response.data
        if(status === 'success') {
            toast('Success! check email for details', {type: 'success'})
        } else {
            toast('Something went wrong', {
                type: 'error'
            });
        }
    }
    render() {
        return (
            <div>
                < CartList outputTotal={this.outputTotal}/>
                <ProductConsumer>
                    {value => {
                        return ( 
                        <div>
                            <h1>Total: {value.total}</h1>
                            <StripeCheckout
                            stripeKey = 'pk_test_51HKRKyIlwRlJnt5AAisaSu5k7KmW266otLxuFT563o18PGyP3N3jNJT6W0cz53CGOmbEff0SGjy7oWjUGCGmjdZ000lxfEdQPE'
                            token={this.handleToken}
                            billingAddress
                            shippingAddress
                            amount={value.total * 100}
                            name="products"/> 
                            </div>
                            )
                        }}
                </ProductConsumer>
            </div>
        )}   
}

export default cart;