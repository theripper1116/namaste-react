import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import AboutUS from "./components/AboutUS";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import appStore from "./utils/appStore";

const ContactUS = lazy(() => import("./components/ContactUS"));
const Cart = lazy(() => import("./components/Cart"));

// this will return an object having all properties of the HTML element, there will be three arguments in this createElement(tagName, {attributes for defined HTML tag}, data that should go inside the defined tag).
// const heading = React.createElement("h1", {className:"h1Heading"}, "Hi I am inside H1 heading", [React.createElement("h2", {className:"h2Heading"}, "HI I am inside H2 Heading"), React.createElement("h2", {className:"h2Heading"}, "HI I am inside H2 Heading")]);
// as we have defined the root in below line, the react only works where we have defined the root, if there is something inside tag having id root, then that data will be replaced by react by using render() method

// const footer = () => {
//     return (

//     )
// }

const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/AboutUs",
        element: <AboutUS />,
      },
      {
        path: "/ContactUS",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ContactUS />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h6>Loading....</h6>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render() method will be responsible for running the above react code
// root.render(heading);

root.render(<RouterProvider router={appRouter} />);
