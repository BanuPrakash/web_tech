import { Component } from "react";

export default class Product extends Component {
    render() {
        let {id,img} = this.props.product;
        return <div className="col-md-4 col-lg-3">
            <div className="card my-2">
                <div className="img-container">
                    <img src={img} className="card-img-top" />
                </div>
            </div>
        </div>
    }
}