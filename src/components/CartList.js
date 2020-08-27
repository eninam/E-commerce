import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
import CartCo from './CartCo'
class CartList extends Component {
    // total = (count, price) => {
    //     this.props.outputTotal(count, price);
    // }
    
    // const contextValue = useContext(UserContext);
    render() {
        return (
            <section className="section">
                <h2 className="section-title">Products Added To Cart</h2>
                <div className="cocktails-center">
            <ProductConsumer>
                { value => {
                    return( 
                        value.productsAddedToCart.map(product => {
                        return <CartCo key={product.id} productToCart={product}
                        handleDetail={value.handleDetail} total={this.total}
                        count={value.count}/>
                    })
                    
                    )
                }
                }
            </ProductConsumer>
            </div>
            </section>
        );
    }
}

export default CartList;