import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React");
        
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1",{id:"head1"}, "Nested h1 tag :)"),
        React.createElement("h2",{id:"head2"}, "Nested h2 tag :)")
    ]),
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1",{id:"head3"}, "Nested h1 tag :)"),
        React.createElement("h2",{id:"head4"}, "Nested h2 tag :)")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);