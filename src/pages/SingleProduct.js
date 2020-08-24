import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import { Container } from 'semantic-ui-react'
import {ProductConsumer} from '../context/context'
class SingleProduct extends Component {
    
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, title, image, description, category, price} 
                    = value.clickedProduct;
                    return(
                        <div>
                        <h2>{title}</h2>
                        <p>category: {category}</p>
                        <p>description: {description}</p>
                        <p>price: {price}</p>
                        <img src={image} alt={title}/>
                        <Link to='/cart'><button>add and go to cart </button></Link>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default SingleProduct;