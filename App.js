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
const jsxheading =(<div>Inside 1st div

<div>Inside 2nd div
    <div>
        <h1 id="heading">Inside h1 tag</h1>
    </div>
</div>

</div>)

console.log(jsxheading);

// ------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);