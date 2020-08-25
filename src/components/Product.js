import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context/context'

class Product extends Component {

    render() {
        const {id, price, title, description, category, image} = this.props.product;
        return (
            <article className="product">
                <div className='img-container'><img src={image} alt={title}/></div>
                <div className="product-footer">
                <h3>{title}</h3>
                <p>category: {category}</p>
                <h4>price: {price}</h4>
                <p>description: {description}</p>
                <ProductConsumer>
                    {value => {
                        return (
                        <div>
                        <Link to={`/product/${id}`} className='button'>
                            < button className = "btn btn-white btn-details"
                            onClick = {
                                () => value.handleDetail(id)}>Details</button>
                        </Link>
                        <button className="btn btn-primary btn-details"
                        onClick = {
                            () => value.addToCart(id)} > add to cart </button>

                        </div>
                        )}}
                </ProductConsumer>

                </div>
            </article>
        );
    }
}

export default Product;