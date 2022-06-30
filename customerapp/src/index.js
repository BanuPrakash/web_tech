import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// upto React 18 version
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById("root"))