import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
import 'bootstrap/dist/css/bootstrap.min.css'; // css-loader style-loader
import { ProductProvider } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
        <App />
    </ProductProvider>
  </React.StrictMode>
);

 
