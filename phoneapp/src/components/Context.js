// import {storeProducts} from '../data';
import axios from 'axios';

import React, {Component} from 'react';
const ProductContext = React.createContext(); // placeholder

class ProductProvider extends Component {
    state = {
        products: [],
        cart: []
    }

    componentDidMount() {
        axios.get("http://localhost:1234/products").then(response => {
            this.setState({
                products: response.data
            })
        });
        // let prds = [];
        // storeProducts.forEach(p => {
        //     prds.push({...p})
        // })
        // this.setState({
        //     products: prds
        // })
    }

    checkout = () => {
        let order = {
            "username": window.sessionStorage.getItem("user"),
            "items": this.state.cart
        }

        axios.post("http://localhost:1234/orders", order).then(response => {
            this.setState({
                cart: []
            }, () =>  console.log("order placed!!!"))
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
        prd.count--;
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
                decrement: this.decrement,
                checkout: this.checkout}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

let ProductConsumer = ProductContext.Consumer;

export {ProductContext, ProductProvider, ProductConsumer};

