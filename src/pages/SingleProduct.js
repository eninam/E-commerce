import React, { Component } from 'react';
<<<<<<< HEAD
// import { Container } from 'semantic-ui-react'

class SingleProduct extends Component {
    
    render() {
       

        return (
            <div>
                single product page
            </div>
=======
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
>>>>>>> fetched data from the fakerstore api and displayed it on the home page
        );
    }
}

export default SingleProduct;