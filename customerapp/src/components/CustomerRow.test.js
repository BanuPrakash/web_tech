import { render, screen, fireEvent } from '@testing-library/react';

import CustomerRow from './CustomerRow';

describe("testing <CustomerRow/> in isolation", () => {
    let callback = jest.fn(); //mock callback inplace of deleteCustomer() of CustomerList

    let c = {
        "id": 123,
        "firstName": "Jack",
        "lastName" : "Sparrow"
    };

    it("test render <CustomerRow/>", () => {
        render(<CustomerRow 
            delEvent={(id) => callback(id)}
            customer={c} key={c.id} />);

        let elem = screen.getByText(/Jack/i);
        expect(elem).toBeInTheDocument();
        screen.debug();
    });

    it("handle delete in <CustomerRow />", () => {
        render(<CustomerRow 
            delEvent={(id) => callback(id)}
            customer={c} key={c.id} />);
            let btn = screen.getByRole("button");
            fireEvent.click(btn);
            expect(callback).toBeCalledTimes(1);
            expect(callback).toBeCalledWith(123);
    })
})