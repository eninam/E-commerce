import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
import Product from './Product'
<<<<<<< HEAD
=======
import { Container } from 'semantic-ui-react'

>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed

class productList extends Component {
    render() {
        return (
<<<<<<< HEAD
            <section className="section">
                <h2 className="section-title">Products</h2>
                <div className="cocktails-center">
            <ProductConsumer>
                { value => {
                    return( 
                        value.products.map(product => {
                        return <Product key={product.id} product={product}
                        handleDetail={value.handleDetail}/>

                    }))
                }}
            </ProductConsumer>
            </div>
            </section>
=======
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
>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
        );
    }
}

export default productList;