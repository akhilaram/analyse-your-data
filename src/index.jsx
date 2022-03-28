import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./redux/store";
import "./global.scss";
const store = configureStore();

const App = () => {
  return (
    <BrowserRouter basename="/analyse-your-data">
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
