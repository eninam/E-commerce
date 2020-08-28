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
            total: 0, 
            productQuantities: {}
        }, () => {
            localStorage.setItem('cart', JSON.stringify(this.state.productsAddedToCart));
            localStorage.setItem('total', JSON.stringify(this.state.total));
            localStorage.setItem('data', JSON.stringify(this.state.productQuantities))
        })
    }
    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState({
            clickedProduct: product
        })}

    removeToCart = (id) => {
        const product = this.getItem(id);
        let data = {...this.state.productQuantities};
        delete data[id];
        this.setState({
            productQuantities: data,
        }, () => {
            localStorage.setItem('data', JSON.stringify(data));
        })
        const sorted = this.state.productsAddedToCart.filter(
            (prod) => prod.id !== id
        );
        this.setState( {
            productsAddedToCart: sorted, 
        }, () => {
            localStorage.setItem('cart', JSON.stringify(sorted));
        })
        this.setState(prevstate  => ({
            total: prevstate.total - (product.price * this.state.productQuantities[id])
        }), () => localStorage.setItem('total', JSON.stringify(this.state.total)))
    }
    addToCart = (id) => {
            const product = this.getItem(id);
            if (!this.state.productQuantities[id]) {
                this.setState( prevstate => ({
                productsAddedToCart: [...prevstate.productsAddedToCart, product]
                }), () => localStorage.setItem('cart', JSON.stringify(this.state.productsAddedToCart)))
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
            }, () => localStorage.setItem('data', JSON.stringify(this.state.productQuantities)));
        } else {
            data[id] = 1;
            this.setState({
                productQuantities: data
            }, () => localStorage.setItem('data', JSON.stringify(this.state.productQuantities)));
        }
        this.setState({
            total: this.state.total + product.price 
        },() => localStorage.setItem('total', JSON.stringify(this.state.total)))

    }

    decreaseCount = (id) => {
        const product = this.getItem(id);
        this.data = JSON.parse(localStorage.getItem('data'));
        let data = {...this.state.productQuantities};
        data[id]--;
        if(data[id] > 0) {
        this.setState({
            productQuantities: data,
            total: this.state.total - product.price 
        }, () => {
            localStorage.setItem('data', JSON.stringify(this.state.productQuantities));
            localStorage.setItem('total', JSON.stringify(this.state.total));
        })
    } 
    
    if(data[id] === 0) {
        this.removeToCart(id);
    }
    if (Object.keys(data).length === 0 ) {
        this.clearCart()
    }
    }

    async componentDidMount() {
            this.productsAddedToCart = JSON.parse(localStorage.getItem('cart'));
            this.total = JSON.parse(localStorage.getItem('total'));
            this.data = JSON.parse(localStorage.getItem('data'));

            if (localStorage.getItem('cart')) {
                this.setState({
                    productsAddedToCart: this.productsAddedToCart
                });
            }
            if (localStorage.getItem('data')) {
                this.setState({
                    productQuantities: this.data
                });
            }
            if (localStorage.getItem('total')) {
                this.setState({
                    total: this.total
                });
            }

        this.setState({
            loading: true,
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