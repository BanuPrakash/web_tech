import React from "react";
import Product from './Product';
import {ProductContext} from './Context';
export default function ProductList() {
        let ctx = React.useContext(ProductContext); // Consumer
        return <div className="container">
            <div className="row">
            {
                ctx.products.map(p => <Product key={p.id} product={p}/>)
            }
            </div>
        </div>
    
}