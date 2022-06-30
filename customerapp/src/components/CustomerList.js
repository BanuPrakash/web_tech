import React, { Component } from "react";
import CustomerRow from "./CustomerRow";

export default class CustomerList extends Component {
    state = {
        "customers": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
        ]
    };

    constructor(props) {
        super(props);
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id); // delete based on id
        // this.state.customers = custs; // ==> doesn't trigger reconcillation

        this.setState({
            "customers": custs
        })
    }

    render() {
        return <React.Fragment>
            {
                this.state.customers.map(c => <CustomerRow 
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={c} key={c.id} />)
            }
        </React.Fragment>
    }
}