import React from "react";
import ReactDOM from 'react-dom/client'; // Correct casing: 'ReactDOM' not 'ReactDom'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
