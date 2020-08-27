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
        total: 0,
        productQuantities: {}
    }
    getItem = (id) => {
        const product = this.state.products.find((item) => item.id === id);
        return product; 
    }

    clearCart = () => {
        this.setState({
            productsAddedToCart: [],
            total: 0
        })
    }
    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState({
            clickedProduct: product
        })}

    removeToCart = (id) => {
        const product = this.getItem(id);
        const sorted = this.state.productsAddedToCart.filter(
            (prod) => prod.id !== id
        );
        this.setState( {
            productsAddedToCart: sorted
        })
        this.setState(prevstate  => ({
            total: prevstate.total - (product.price * prevstate.productQuantities[id])
        }))
        
    }
    addToCart = (id) => {
            const product = this.getItem(id);
            if (!this.state.productQuantities[id]) {
                this.setState( prevstate => ({
                productsAddedToCart: [...prevstate.productsAddedToCart, product]
                }) )
            }
            this.count(id)
    }
        
    count = (id) => {
        const product = this.getItem(id);
        let data = {...this.state.productQuantities};
        if (data[id]) {
            data[id]++
            this.setState({
                productQuantities: data
            });
        } else {
            data[id] = 1;
            this.setState({
                productQuantities: data
            });
        }
        this.setState({
            total: this.state.total + product.price 
        })

        console.log(this.state.productQuantities)

    }

    decreaseCount = (id) => {
        const product = this.getItem(id);
        let data = {...this.state.productQuantities};
        if(data[id] > 0) {
        data[id]--;
        this.setState({
            productQuantities: data,
            total: this.state.total - product.price 
        })
    } 
    else {
        this.removeToCart(id)
    }
    console.log(this.state.productQuantities)

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
                    products: data,
                    clickedProduct: data[0]
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
        }}

    render() {
        return (
            < ProductContext.Provider value = {
                {
                ...this.state,
                handleDetail: this.handleDetail,
                productsAddedToCart: this.state.productsAddedToCart,
                productQuantities: this.state.productQuantities,
                removeToCart: this.removeToCart,
                decreaseCount: this.decreaseCount,
                count: this.count,
                clearCart: this.clearCart,
                addToCart: this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
            )}}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};