import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import FirstForm from "./Formik/FirstForm";

import HooksCakeContainer from "./HooksCakeContainer";
import OtherCake from "./OtherCake";

function Example() {
    return (
        <Provider store={store}>
            <div className="container">
                <HooksCakeContainer />
                <OtherCake />
                <FirstForm/>
            </div>
        </Provider>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
