import React, { Component } from 'react';
import {ProductConsumer} from '../context/context'
class CartCo extends Component {

    state  = {
        count : 1
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    onTotal = (price) => {
        this.increaseCount();
        // console.log("in cart co " + price )
        this.props.total(this.state.count, price)
    }


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
                        <button className="btn btn-primary btn-details"
                        onClick = {
                            () => { value.removeToCart(id)}} > remove To Cart </button>
                        </div>
                        )}}
                </ProductConsumer>
                < button className = "btn btn-white btn-details"
                    onClick={() => this.onTotal(price)}> Increase quantity: {this.state.count} </button>
                </div>
            </article>
        );
    }
}

export default CartCo;