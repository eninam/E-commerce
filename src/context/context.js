import React, { Component } from 'react';

const ProductContext = React.createContext()
class ProductProvider extends Component {
    state = {
        products: [],
        loading: false
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
    
    handleDetail = () => {
        console.log("form handle deartail method")
    }
    addToCart = () => {
        console.log("from add to card method")
    }

    render() {
        return (
            < ProductContext.Provider value = {
                {...this.state, handleDetail: this.handleDetail,
                addToCart: this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};