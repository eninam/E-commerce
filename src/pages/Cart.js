import React, { Component } from 'react';
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
            </div>
        );
    }
}

export default cart;