import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import { Container } from 'semantic-ui-react'
import {ProductConsumer} from '../context/context'
class SingleProduct extends Component {
    
    render() {
        return (
            <ProductConsumer>
                {value => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default SingleProduct;