import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as  Router} from "react-router-dom";

const store = configureStore({
    reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Provider store={store}>
        <App/>
    </Provider>
    </Router>
);


