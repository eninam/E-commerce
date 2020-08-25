import React, { Component } from 'react';
<<<<<<< HEAD
import CartList from '../components/CartList'
import {ProductConsumer} from '../context/context'

class cart extends Component {
    state = {
        total : 0
    }

    // setTotal() {
    //     return (
    //         <ProductConsumer>
    //                 {
    //                     value => {
    //                         this.setState({
    //                             total: value.total
    //                         })
    //                     }
    //                 }
    //             </ProductConsumer>
    //     )
    // }
    outputTotal = (count, price) => {
        // f (typeof count !== 'undefined') {
         console.log("count " + count + "product " + count * price)
        const t =  count * price;
        this.setState({
            total: this.state.total + t
        }, () => console.log("total " + this.state.total))
    
    }
    render() {
        return (
            <div>
                < CartList outputTotal={this.outputTotal}/>
                <ProductConsumer>
                    {
                        value => {
                            return ( <h1>Total: {value.total + this.state.total}</h1>)
                        }
                    }
                </ProductConsumer>
                {/* <h1>Total: {this.outputTotal}</h1> */}
=======

class cart extends Component {
    render() {
        return (
            <div>
                <h1>from cart page </h1>
>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
            </div>
        );
    }
}

export default cart;