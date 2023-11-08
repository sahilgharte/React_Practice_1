import React from "react";
import { ReactDOM } from "react-router-dom";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }


    render(){
        return (<div className="res-card">
            <h2>Name: {this.props.name}</h2>
            <h3>Age: {this.props.age}</h3>
            <h3>Phone: +91 {this.props.phone}</h3>
            <h4>{this.state.count}</h4>
        </div>)
    }
}

export default UserClass;