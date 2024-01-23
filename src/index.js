import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/reduxIndex';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import AuthProvider from './store/AuthProvider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
);