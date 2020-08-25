import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import { Container } from 'semantic-ui-react'
import {ProductConsumer} from '../context/context'
class SingleProduct extends Component {
    
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { title, image, description, category, price} 
                    = value.clickedProduct;
                    return(
                        < article className = "product" >
                            <div className='img-container'><img src={image} alt={title}/></div>
                            <div className="product-footer">
                            <h3>{title}</h3>
                            <p>category: {category}</p>
                            <h4>price: {price}</h4>
                            <p>description: {description}</p>
                            <Link to='/cart'><button className="btn btn-primary ">go to cart </button></Link>
                        </div>
                        </article>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default SingleProduct;