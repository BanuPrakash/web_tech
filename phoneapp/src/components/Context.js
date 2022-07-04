import {storeProducts} from '../data';
import React, {Component} from 'react';
const ProductContext = React.createContext(); // placeholder

class ProductProvider extends Component {
    state = {
        products: []
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

    render() {
        return <ProductContext.Provider value={{...this.state}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

let ProductConsumer = ProductContext.Consumer;

export {ProductContext, ProductProvider, ProductConsumer};

