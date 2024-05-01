import React from 'react'; //React is coming from node modules
import ReactDOM from 'react-dom/client';

// React.createElement is not a good way to create elements, syntax is bad
// To help the developer community, FB devs created JSX 

const JSXHeading = () => (
  <h1 id="heading" className="heading-class" tabIndex="5">
    Namaste React         
  </h1>
);

// Functional component -> a function that returns a react element
const HeadingComponent = () => {
  return (
    <div class="container">
      {JSXHeading()}
      <JSXHeading />
      <h1 id="heading" className="heading-class" tabIndex="5">
        Namaste React  2       
      </h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);