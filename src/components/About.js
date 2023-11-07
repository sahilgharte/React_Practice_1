import React from "react";
import UserClass from "./UserClass";

const About = () => {
    return (
    
        <div >
            <h1>About</h1>
            <h3>Hello guys this is my about us component ... Sooo elegent beutiful and :| </h3>

            <div className="user-card-container">
                <UserClass name={"Sahil Gharte"} age= {"23"} phone={"9370778677"}/>
                <UserClass name={"Sahil Gharte"} age= {"23"} phone={"9370778677"}/>
                <UserClass name={"Sahil Gharte"} age= {"23"} phone={"9370778677"}/>
                <UserClass name={"Sahil Gharte"} age= {"23"} phone={"9370778677"}/>
                <UserClass name={"Sahil Gharte"} age= {"23"} phone={"9370778677"}/>
            </div>
        </div>

    )
}
export default About;