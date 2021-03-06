import React, { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

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
        this.state.complete = this.state.customers;
        this.filterCustomers= this.filterCustomers.bind(this);
    }

    filterCustomers(txt) {
        let custs = this.state.complete.filter(c => c.lastName.toUpperCase()
                .indexOf(txt.toUpperCase()) >= 0); //customers whose lastName contains "txt"
        
        this.setState({
                    "customers": custs
        })
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
            {/* <Filter filterEvent={this.filterCustomers.bind(this)}/> */}
            <Filter filterEvent={this.filterCustomers}/>
            {
                this.state.customers.map(c => <CustomerRow 
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={c} key={c.id} />)
            }
        </React.Fragment>
    }
}