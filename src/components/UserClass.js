import React from "react";
import { ReactDOM } from "react-router-dom";

class UserClass extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (<div className="res-card">
            <h2>Name: Sahil Gharte</h2>
            <h3>Age: 23</h3>
            <h3>Email: sahilgharte4@gmail.com</h3>
            <h3>Phone: +91 9370778677</h3>
        </div>)
    }
}

export default UserClass;