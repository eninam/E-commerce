import React, { Component } from 'react';
import CartList from '../components/CartList'
import {ProductConsumer} from '../context/context'
import 'react-toastify/dist/ReactToastify.css';
import PayPalButton from '../components/PaypalButton'
import {withRouter} from 'react-router-dom'

class cart extends Component {
    // let history = useHistory();
    render() {
        return (
            <div>
                < CartList outputTotal={this.outputTotal}/>
                <ProductConsumer>
                    { value => {
                        return ( 
                        <div>
                            {value.total > 0 && <button className="btn btn-white btn-details" onClick={value.clearCart}> Clear cart </button>}
                            <h1>Total: { Math.round(value.total * 100) / 100}</h1>
                            {value.total > 0 && <PayPalButton value={value} history={this.props.history}
                             total={ Math.round(value.total * 100)/100} clearCart={value.clearCart}/> }
                            </div>
                            )
                        }}
                </ProductConsumer>
            </div>
        )}   
}
export default withRouter(cart);