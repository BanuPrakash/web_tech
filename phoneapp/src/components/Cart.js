import React from "react";
import CartList from './CartList';
import { ProductContext } from "./Context";
import { Button } from "./Button";

export default function Cart() {
    let ctx = React.useContext(ProductContext);
        return <>
            {
                ctx.cart.map(p => <CartList key={p.id} product={p} /> )
            }
            <div className="container">
            <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Button onClick={() => ctx.checkout()}> Checkout </Button>
                    </div>
            </div>
            </div>
        </>
    
}