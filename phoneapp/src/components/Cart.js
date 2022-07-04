import React from "react";
import CartList from './CartList';
import { ProductContext } from "./Context";

export default function Cart() {
    let ctx = React.useContext(ProductContext);
        return <>
            {
                ctx.cart.map(p => <CartList key={p.id} product={p} /> )
            }
        </>
    
}