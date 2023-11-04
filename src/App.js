import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// -----------------------

// This is how we create an React element - but it no development friendly
// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React");
        
// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child"}, [
//         React.createElement("h1",{id:"head1"}, "Nested h1 tag :)"),
//         React.createElement("h2",{id:"head2"}, "Nested h2 tag :)")
//     ]),
//     React.createElement("div", {id: "child1"}, [
//         React.createElement("h1",{id:"head3"}, "Nested h1 tag :)"),
//         React.createElement("h2",{id:"head4"}, "Nested h2 tag :)")
//     ])
// ]);

// It is an object
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderint the object to the root 
// root.render(parent);



// ReactElement --> Object ---> After rendering -----> Html elements

// -------------------------------------------------

// so rather than using the react element which in not the feasible in development perspective
// So we use JSX
// JavaScript XML 
// JSX (using parcel(babel)) -------> ES6 engine can understand.
// JSX ---> React.createElement --> React object ---> Html element
// only camel casing works hear


// ----------------------------------------------

// const jsxheading =(<div>

// <div>
//     <div>
//         <h1 id="heading">Inside React Element</h1>
//     </div>
// </div>

// </div>)

// Functional component

// const TestComponent = () => (
//     <div className="testcontainer">
//         <h1>Heading from TestComponent ..</h1>
//         {jsxheading}
//     </div>
// );

// const HeadingComponent = () => (
//     <div className="headingcontainer">
//         <h2>Heading form Head Component ..</h2>
//         <TestComponent/>
//         {TestComponent()}
//     </div>
// );

// ------------------------

// Code for food ordering app


const AppComponent = () =>{
return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
);
};

const appRouters = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
]);


// ------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouters} />);

// ------------------------------------------------------------------------