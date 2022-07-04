import {storeProducts} from '../data';
import React, {Component} from 'react';
const ProductContext = React.createContext(); // placeholder

class ProductProvider extends Component {
    state = {
        products: [],
        cart: []
    }

    componentDidMount() {
        let prds = [];
        storeProducts.forEach(p => {
            prds.push({...p})
        })
        this.setState({
            products: prds
        })
    }

    addToCart = (id) => {
        let prd = this.state.products.filter(p => p.id === id)[0];
        prd.count = 1;
        prd.total = prd.price;
        let cpy = this.state.cart;
        cpy.push(prd)
        this.setState({
            cart: cpy
        })
    }

    increment = (id) => {
        let prd = this.state.products.filter(p => p.id === id)[0];
        prd.count++;
        prd.total = prd.price * prd.count;
        // trigger re-render
        this.state({
            cart:this.state.cart
        })
    }

    decrement = (id) => {
        let prd = this.state.products.filter(p => p.id === id)[0];
        prd.count++;
        prd.total = prd.price * prd.count;
        // trigger re-render
        this.state({
            cart:this.state.cart
        })
    }
    render() {
        return <ProductContext.Provider value={{...this.state, 
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

let ProductConsumer = ProductContext.Consumer;

export {ProductContext, ProductProvider, ProductConsumer};

