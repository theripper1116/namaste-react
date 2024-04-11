// EP1-2 - Inception - Igniting our app

Q1: - Difference between ~ and ^ sign inside package.json?
A1: - ^ or carrat sign will be responsible for upgrading the minor version of dev dependencies whereas ~ or tilde sign will upgrade the major version of dev dependencies, and 
      it is safe to use ^ instead of ~ sign, as if the dependency's major version is upgraded, then there are high chances that something might break.

Q2: - What is the use -D when installing any package using npm?
A2: - -D is used if we want the dev dependencies on the development machine.

Q3: - What is Package.json file?
A3: - package.json file is responsible for maintaining all dependencies that our project requires with version.

Q4: - WHat is package-lock.json?
A4: - package-lock.json will have the exact version of all the modules/dependencies installed via npm. whereas package.json will be having approximate version of the modules/dependencies.

Q5: - What is transitive dependencies?
A5: - The dependencies which in turn also have other dependencies is know as transitive dependencies.

Q6: - Benefits of Parcel bundler?
A6: - 1. Dev Build
      2. Local Server
      3. HMR = Hot Module Replacement
      4. File Watching Algorithm
      5. Caching - Faster Builds
      6. Image Optimization
      7. Minification
      8. Bundling
      9. Compress
      10. Consistent Hashing
      11. Code Splitting
      12. Differential Bundling - support older browser
      13. Diagnostic
      14. Error Handeling
      15. HTTPs
      16. Tree Shaking - remove unused code
      17. Different dev and prod bundles

// EP-3 - Laying the foundations
Q7: - How does JSX helps in writing react code?
A7: - In normal JS, we use React.createElement again and again for creating HTML elements, but it's not an efficient way to do it, so we use JSX, and in JSX, we directly write what element we need to add to HTML page.

Q8: - What exactly is JSX?
A8: - JSX is nothing but JS with HTML like syntax. e.g, const heading = <h1> Hello There </h1>

Q9: - How JSX code is converted into JS?
A9: - Babel transpiler is responsible for converting the JSX into React.createElement and then this method returns an object which is then converted into HTML element by using root.render().

Q10: - How many types of React components are there?
A10: - Mainly there are two types of components in react: - 
            1. Functional based components: - These include returning of JSX from a JavaScript function.
                                              e.g., const FunctionalBasedComponent = () => {
                                                    return (
                                                      <h1>Welcome to functional component</h1>
                                                    )
                                                    }
                                                    root.render(<FunctionalBasedComponent />);
            2. Class based components: - These include returning of JSX from a JavaScript classes.

Q11: - What is component composition?
A11: - The insertion of any component inside any other component, then it is called component composition.

Q12: - How to create an React element?
A12: - We can create an React element using React.createElement and it will accept three parameters
       1. What type of element 
       2. Attributes related to the element.
       3. What should go inside this element
       e.g., React.createElement("h1", {class="h1Heading"}, "HI I am inside H1 Heading");

       We can also have nested elements inside any HTML element just like this
       e.g., React.createElement("h1", {className:"h1Heading"}, "Hi I am inside H1 heading", React.createElement("h2", {className:"h2Heading"}, "HI I am inside H2 Heading"));
       
       and if we want to have multiple child under same parent, we can pass them as an array
       e.g., React.createElement("h1", {className:"h1Heading"}, "Hi I am inside H1 heading", [React.createElement("h2", {className:"h2Heading"}, "HI I am inside H2 Heading"), React.createElement("h2", {className:"h2Heading"}, "HI I am inside H2 Heading")]);

Q13: - What are props in React?
A13: - Props are just arguments passed to the functional method in js, and when this function recieves arguments, it will be in form of js objects. 
       e.g., const myFunc = (props) {
            console.log(props);
       };

       <FunctionalComponent myName = "Milan", myAge = "24"/>

       output: - {
            myName: "Milan",
            myAge: "24"
       }

Q14: - What is config driven UI?
A14: - Controlling UI based on some data or configuration is known as config driven UI.

Q15: - What does "Each prop should have a unique key" warning mean?
A15: - It means that each rendered component should have a unique key and it can be defined using key attribute. Also, by implementing it, it helps in optimization of code and re-rendering becomes faster. NOTE: - WE must not use index's as keys.

Q16: - What are two kinds of exports used in js?
A16: - There are 2 types of exports used in JS
       1. Default export
          e.g., export default varName/ FunctionName
       2. Named export
          e.g., export varName/ FunctionName

Q17: - What are React Hooks?
A17: - React Hooks are just normal js functions written by facebook developers.
       There are mainly two hooks that are widely used inside React: - 
              1. useState: - Mainly used when we want to store the data through which the rendering depends, i.e., data driven rendering.
              2. useEffect: - This hooks is invoked whenever there is any change in the state variable, this will always be invoked after rendering is completed.

Q18: - What is React Algorithm/ Reconciliation Algorithm?
A18: - The comparison of Virtual DOM with the actual DOM using DIFF ALGORITHM, so that React can compare the changes and updates only required section of HTML page.

Q19: - What is virtual DOM?
A19: - Virtual DOM is nothing but actual representation of DOM (React Elements).

Q20: - What is React Fibre?
A20: - React Fibre is a new way of doing comparison between virtual DOM and Actual DOM introduced in React 16.

Q21: - What is Monolith Architecture?
A21: - In Monolith Architecture, we used to have only one service and in that service, we will do everything like, 
       - makking API calls
       - making DB connect
       - write UI code
       - write backend code
       - etc.,

Q22: - What is Micro Service Architecture?
A22: - Unlike monolith architecture, we have different small programs/ services in which we do each task seperately like,
       - makking API calls
       - making DB connect
       - write UI code
       - write backend code
       - etc.,

Q23: - Explain React-Router-Dom?
A23: - React-Router-DOM is a library through which we can have routing capabilities in our project.
       We can install using npm i react-router-dom
       we need to have our routing configuration ready in our .js file by importing it from react-router-dom as import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
       createBrowserRouter will return an array of object in which we define what will be the paths and configuration our project needs.
       RouterProvider will be used to render the project inside root.
       Outlet will be used to replace the component wherever Outlet is used.

Q24: - What are the two types of routing?
A24: - 1. Server Side Routing: - Server side routing means that HTML page requests the page from server and reloads the whole page.
       2. Client Side Routing: - Client side routing means that HTML page has already got all the components and rerendering will be done from client's browser only and not from server.

Q25: - How to catch error in React router?
A25: - In order to catch error in React Router, we can use useRouteError and in this, we can display anything as useRouteError will return an object having all the details about the error and can be in corporated inside createBrowserRouter using key errorElement.

Q26: - How to use dyanamic routing in react?
A26: - We can use dynamic routing by declaring the path as : 
       e.g., path: "/restaurents/:resID";
       
       and we can fetch the folowing the :resID using useParams hooks provided to us by react-router-dom.

Q27: - 