import React from "react";
import ReactDOM from "react-dom";

// this will return an object having all properties of the HTML element, there will be three arguments in this createElement(tagName, {attributes for defined HTML tag}, data that should go inside the defined tag).
const heading = React.createElement("h1", { id: "heading1" }, "Namaste react!");
// as we have defined the root in below line, the react only works where we have defined the root, if there is something inside tag having id root, then that data will be replaced by react by using render() method
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render() method will be responsible for running the above react code
root.render(heading);

