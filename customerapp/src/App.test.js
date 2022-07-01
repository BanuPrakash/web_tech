import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders application', () => {
  render(<App />); // renders HTML in memory from VDOM
  const h1Element = screen.getByText(/Customer Application/i);
  //  <h1> Customer Application </h1>
  expect(h1Element).toBeInTheDocument();
});

it("renders customers", () => {
  render(<App/>);
  let btns = screen.getAllByRole("button");
  expect(btns.length).toBe(6);
});


it("delete a customer", () => {
  render(<App/>);
  let btns = screen.getAllByRole("button");
  fireEvent.click(btns[3]);
  btns = screen.getAllByRole("button");
  expect(btns.length).toBe(5);
  let div = screen.queryByText(/Monica/i);
  expect(div).toBeNull()
});


// it("filter customers", () => {
//   render(<App/>);
//   let txtBox = screen.getByPlaceholderText("search by name");
//   fireEvent.change(txtBox, {"target": {"value": "Geller"}});
//   // screen.debug();
//   let btns = screen.getAllByRole("button");
//   expect(btns.length).toBe(2);
// });


