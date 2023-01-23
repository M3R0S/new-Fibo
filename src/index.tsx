import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";

import { App } from "app";
// import { store } from "store";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
    // <Provider store={store}>
    // <BrowserRouter>
    <App />
    // </BrowserRouter>
    // </Provider>
);
