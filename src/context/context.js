import React, { Component } from 'react';

const ProductContext = React.createContext()
class ProductProvider extends Component {
    state = {
        products: [],
<<<<<<< HEAD
        loading: false
    }

=======
        loading: false,
        clickedProduct: {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }
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
>>>>>>> fetched data from the fakerstore api and displayed it on the home page
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
>>>>>>> fetched data from the fakerstore api and displayed it on the home page
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
    handleDetail = () => {
        console.log("form handle deartail method")
    }
=======

>>>>>>> fetched data from the fakerstore api and displayed it on the home page
    addToCart = () => {
        console.log("from add to card method")
    }

    render() {
        return (
            < ProductContext.Provider value = {
<<<<<<< HEAD
                {...this.state, handleDetail: this.handleDetail,
=======
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
>>>>>>> fetched data from the fakerstore api and displayed it on the home page
                addToCart: this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};