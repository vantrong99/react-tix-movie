import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import css
import "bootstrap/dist/css/bootstrap.min.css";
// import js
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// import redux
import { createStore, applyMiddleware, compose } from "redux";
// createStore là 1 hàm gồm 2 tham số (reducer,)
// middleware để đảm bảo rằng khi tới được reducer, response từ server đã  được trả về - ( Có nhiều loại middleware, ở đây ta sử dụng Redux-thunk)
// compose là hàm được cung cấp bởi Redux  để kết hợp các middleware lại với nhau.
import { Provider } from "react-redux";
// Provider để kết nối ứng dụng react của mình với store của redux
import thunk from "redux-thunk";
import rootReducer from "./redux/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
