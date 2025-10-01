import './index.less';
import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)
