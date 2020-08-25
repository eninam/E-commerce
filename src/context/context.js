import React, { Component } from 'react';
<<<<<<< HEAD
=======

>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
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
<<<<<<< HEAD
        },
        productsAddedToCart: [],
        total: 0
    }
=======
        }
    }
    
>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
    getItem = (id) => {
        const product = this.state.products.find((item) => item.id === id);
        return product; 
    }
<<<<<<< HEAD
=======

>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
    handleDetail = (id) => {
        const product = this.getItem(id)
        this.setState({
            clickedProduct: product
        })
    }
<<<<<<< HEAD

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
=======
>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
    async componentDidMount() {
        this.setState({
            loading: true
        })
        try {
            const response = await fetch(`https://fakestoreapi.com/products?limit=8`)
            const data = await response.json();
            if(data) {
                this.setState({
<<<<<<< HEAD
                    products: data
=======
                    products: data,
                    clickedProduct: data[0]
>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
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
<<<<<<< HEAD
=======
    

    addToCart = () => {
        console.log("from add to card method")
    }
>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed

    render() {
        return (
            < ProductContext.Provider value = {
                {
<<<<<<< HEAD
                ...this.state,
                handleDetail: this.handleDetail,
                productsAddedToCart: this.state.productsAddedToCart,
                removeToCart: this.removeToCart,
                addToCart: this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
            
=======
                    ...this.state,
                    handleDetail: this.handleDetail,
                addToCart: this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
>>>>>>> 631d696d5ec4f65516922ba93c6e4ce67ed2b8ed
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};