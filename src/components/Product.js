import React, { Component } from 'react';
<<<<<<< HEAD

class Product extends Component {
    render() {
         const {id, price, title, description, category, image} = this.props.product;
        return (
            <div>
                <h2>{title}</h2>
                <img src={image} alt={title}/>
                <p>category: {category}</p>
                <p>description: {description}</p>
                <p>price: {price}</p>
            </div>
=======
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context/context'

class Product extends Component {

    
    render() {
        const {id, price, title, description, category, image} = this.props.product;
        return (
            <article className="product">
                <div className='img-container'><img src={image} alt={title}/></div>
                <div className="product-footer">
                <h2>{title}</h2>
                <p>category: {category}</p>
                <p>description: {description}</p>
                <p>price: {price}</p>
                <ProductConsumer>
                    {value => {
                        return (<Link to={`/product/${id}`} className='button'>
                            <button onClick={
                                () => value.handleDetail(id)}>Details</button>
                        </Link>
                        )}}
                </ProductConsumer>
                </div>
            </article>
>>>>>>> fetched data from the fakerstore api and displayed it on the home page
        );
    }
}

export default Product;