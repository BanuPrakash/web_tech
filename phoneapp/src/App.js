import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';

function App() {
  return (
     <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<ProductList />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;
