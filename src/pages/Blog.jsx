import React from "react";
import NavigationBar from "./shared/NavigationBar";
import Footer from "./shared/Footer";

const Blog = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <p className="uppercase font-blog text-5xl text-orange-500 text-center my-10">
        Blog
      </p>
      <ul className="px-52 ">
        <li className="list-disc">
          <h1 className="text-4xl uppercase my-5">
            Tell us the differences between uncontrolled and controlled
            components
          </h1>
          <p className="font-semibold text-2xl">
            Differences between Uncontrolled and Controlled Components:
          </p>
          <p>
            Uncontrolled Components: These components have their state managed
            by the DOM rather than by React. They are often used for simple
            forms and require less code. Accessing their values is done through
            DOM manipulation.
          </p>
          <p>
            Controlled Components: In these components, React manages the state,
            typically through component state (useState). They are used for more
            complex forms, allowing precise control, validation, and
            synchronization of input values.
          </p>
        </li>
        <li className="list-disc">
          <h1 className="text-4xl  uppercase my-5">How to validate React props using PropTypes</h1>
          <p className="font-semibold text-2xl"> Validating React Props using PropTypes:</p>
          <p>
            PropTypes Validation: PropTypes is a library used for specifying the
            expected data types and requirements of props passed to a React
            component. It helps catch and prevent runtime errors and ensures
            props conform to the expected data types and structures.
          </p>
          <p></p>
        </li>
        <li className="list-disc">
          <h1 className="text-4xl  uppercase my-5">Tell us the difference between nodejs and express js.</h1>
          <p className="font-semibold text-2xl">Difference between Node.js and Express.js:</p>
          <p>Node.js: Node.js is a JavaScript runtime environment that allows you to run JavaScript code on the server-side. It provides a core set of modules for various tasks and doesn't include a built-in web framework. Developers use it as a platform for building scalable network applications.</p>
          <p>Express.js: Express.js is a minimal and flexible web application framework for Node.js. It simplifies tasks like routing, handling HTTP requests, and middleware management. Developers use Express to build web servers and APIs on top of Node.js.</p>
        </li>
        <li className="list-disc">
          <h1 className="text-4xl  uppercase my-5">What is a custom hook, and why will you create a custom hook?</h1>
          <p className="font-semibold text-2xl">Custom Hooks in React:</p>
          <p>Custom Hooks: Custom hooks are JavaScript functions in React that start with "use" and encapsulate reusable stateful logic. They enable you to share and reuse logic across different components, promoting code modularity and maintainability.</p>
          <p>Why Create Custom Hooks: Custom hooks are created to abstract away complex or repetitive code, enhance code reusability, and improve readability. They allow you to keep component logic separate and share it among multiple components, reducing duplication and making code easier to manage.</p>
        </li>
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
