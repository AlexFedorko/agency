import React from "react";
import {createRoot} from "react-dom/client";
import './src/assets/scss/App.scss';

import { Provider } from 'react-redux'
import Router from "./router";
import { configureStore } from '@reduxjs/toolkit'
import reducerGlobal from './src/global/reducer'

const store = configureStore({
    reducer: {
        app: reducerGlobal,
    },
})




createRoot(document.getElementById("root")).render(
     <Provider store={store}>
            <Router/>
     </Provider>
);
