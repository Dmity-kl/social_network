import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import React from "react";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)

