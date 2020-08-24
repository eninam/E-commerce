import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
import Product from './Product'
import { Container } from 'semantic-ui-react'


class productList extends Component {
    render() {
        return (
            <Container>
            <ProductConsumer>
                { value => {
                    return value.products.map(product => {
                        return <Product key={product.id} product={product}
                        handleDetail={value.handleDetail}/>
                    })
                }}
            </ProductConsumer>
            </Container>
        );
    }
}

export default productList;