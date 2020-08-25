import React, { Component } from 'react';
const ProductContext = React.createContext()
class ProductProvider extends Component {
    state = {
        products: [],
        loading: false,
        clickedProduct: {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        },
        productsAddedToCart: [],
        total: 0
    }
    getItem = (id) => {
        const product = this.state.products.find((item) => item.id === id);
        return product; 
    }
    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState({
            clickedProduct: product
        })
    }

    removeToCart = (id) => {
        const sorted = this.state.productsAddedToCart.filter(
            (prod) => prod.id !== id
        );
        this.setState({
            productsAddedToCart: sorted,
            total: this.state.total - this.getItem(id).price
        })

    }

    addToCart = (id) => {
            const product = this.getItem(id)
            this.setState({
                productsAddedToCart: [...this.state.productsAddedToCart, product],
                total: this.state.total += product.price
            })
    }
    async componentDidMount() {
        this.setState({
            loading: true
        })
        try {
            const response = await fetch(`https://fakestoreapi.com/products?limit=8`)
            const data = await response.json();
            if(data) {
                this.setState({
                    products: data
                })
            } else {
                this.setState({
                    products: []
                },)
            }
            this.setState({
                loading: false
            })
        }
        catch(error){
            console.log(error);
            this.setState({
                loading: false
            })
        }
        if(!this.state.loading) {
            return <h2>Loading...</h2>
        }
}

    render() {
        return (
            < ProductContext.Provider value = {
                {
                ...this.state,
                handleDetail: this.handleDetail,
                productsAddedToCart: this.state.productsAddedToCart,
                removeToCart: this.removeToCart,
                addToCart: this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
            
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};