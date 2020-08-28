import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import {ProductConsumer} from '../context/context'

class home extends Component {

    render() {
        return (
            <main>
                <ProductConsumer>
                    {
                        value => {
                            return <ProductList value={value}/>
                        }}
                </ProductConsumer>

            </main>
        );
    }
}

export default home;