import React from "react";
import ReactDOM from "react-dom/client";

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

const HeaderComponent = () =>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://imgs.search.brave.com/XJxGdNB8aQGeRDWYpjeoePrMc8un8-Nznyx8n0FOLM4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ncmFw/aGljc3ByaW5ncy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDQvNGJhZDhj/MWY0NTJmNDZhNGMw/OTIzMTE1NDE5ZGY2/ZjAuc3ZnP3g0MDMy/OA.svg" alt="LOGO not rendered yet"/>
            </div>

            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Card</li>
                </ul>
            </div>
        </div>
    );
};

const AppComponent = () =>{
return (
    <div className="app">
        <HeaderComponent/>
    </div>
);
};


// ------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent/>);

// ------------------------------------------------------------------------