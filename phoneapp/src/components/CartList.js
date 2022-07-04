import React from "react";
import { ProductContext } from "./Context";
import { Button } from "./Button";

export default function CartList({product}) {
    let ctx = React.useContext(ProductContext);
    let {img, title, price, count, total} = product;
        return <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src={img} style={{"width":"50px"}} />
                </div>
                <div className="col-md-2">
                    {title}
                </div>
                <div className="col-md-2">
                    <Button> + </Button>
                    <Button> - </Button>
                </div>
                <div className="col-md-2">
                    Price: {price}
                </div>
                <div className="col-md-2">
                    Count: {count}
                </div>
                <div className="col-md-2">
                    Total : {total}
                </div>
            </div>
          
        </div>
    
}