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

Q12: - 