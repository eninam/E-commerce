import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
class CartCo extends Component {

    render() {
        const {id, price, title, description, category, image} = this.props.productToCart;
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
                        < button className = "btn btn-primary btn-details"
                        onClick={() => value.count(id)}> Increase quantity: {value.productQuantities[id]} </button>
                        < button className = "btn btn-white btn-details"
                        onClick={() => value.decreaseCount(id)}>Decrease quantity</button>
                        < button className = "btn btn-white btn-details"
                        onClick = {
                            () => { value.removeToCart(id)}} > remove To Cart </button>
                        </div>
                        )}}
                </ProductConsumer>
                </div> 
            </article>
        );
    }
}

export default CartCo;