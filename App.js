import React from "react";
import ReactDOM from "react-dom";

// this will return an object having all properties of the HTML element, there will be three arguments in this createElement(tagName, {attributes for defined HTML tag}, data that should go inside the defined tag).
// const heading = React.createElement("h1", {className:"h1Heading"}, "Hi I am inside H1 heading", [React.createElement("h2", {className:"h2Heading"}, "HI I am inside H2 Heading"), React.createElement("h2", {className:"h2Heading"}, "HI I am inside H2 Heading")]);
// as we have defined the root in below line, the react only works where we have defined the root, if there is something inside tag having id root, then that data will be replaced by react by using render() method

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img className="logo-image" alt="header-logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?w=826&t=st=1712044432~exp=1712045032~hmac=3dd8d4f42ba112e654a001b463b62c40326b58b419d512574c87f3391b825917logo.jpg" />
                <div className="header-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <textarea className="body-search" placeholder="Enter any restaurent name"></textarea>
            <RestaurentList />
        </div>
    )
}

const RestaurentList = () => {
    return (
        <div className="restaurent-list">
            <img className="restaurent-image" alt="restaurent-image" src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=826&t=st=1712046686~exp=1712047286~hmac=c787fcc284f9a258636b9521c9b82f1253bbd0ac09542c3e5193e8a17e38e09a"></img>
            <h3>Restaurent Name</h3>
            <h3>ETA</h3>
            <h3>Rating</h3>
        </div>
    )
}

// const footer = () => {
//     return (

//     )
// }

const RenderApplication = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render() method will be responsible for running the above react code
// root.render(heading);

root.render(<RenderApplication />)