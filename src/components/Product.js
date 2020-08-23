import React, { Component } from 'react';

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
        );
    }
}

export default Product;