import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
import Product from './Product'


class productList extends Component {
    render() {
        // console.log("in prod list")
        // console.log(this.props)
        return (
            <section className="section">
                <h2 className="section-title">Products</h2>
                < div className = "products-center" >
            <ProductConsumer>
                { value => {
                    return( 
                        value.products.map(product => {
                        return <Product key={product.id} product={product}
                        handleDetail={value.handleDetail}/>

                    }) )
                }}
            </ProductConsumer>
            </div>
            </section>
        )}
}

export default productList;