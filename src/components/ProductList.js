import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
import Product from './Product'


class productList extends Component {
    render() {
        return (
            <div>
                from product list 
            
            <ProductConsumer>
                { value => {
                    return value.products.map(product => {
                        return <Product key={product.id} product={product}
                        handleDetail={value.handleDetail}/>
                    })
                }}
            </ProductConsumer>
            </div>
        );
    }
}

export default productList;