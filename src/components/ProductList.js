import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
import Product from './Product'
<<<<<<< HEAD
=======
import { Container } from 'semantic-ui-react'
>>>>>>> fetched data from the fakerstore api and displayed it on the home page


class productList extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div>
                from product list 
            
=======
            <Container>
>>>>>>> fetched data from the fakerstore api and displayed it on the home page
            <ProductConsumer>
                { value => {
                    return value.products.map(product => {
                        return <Product key={product.id} product={product}
                        handleDetail={value.handleDetail}/>
                    })
                }}
            </ProductConsumer>
<<<<<<< HEAD
            </div>
=======
            </Container>
>>>>>>> fetched data from the fakerstore api and displayed it on the home page
        );
    }
}

export default productList;