import React from "react";
import { APP_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    let [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img src={APP_LOGO} alt="LOGO not rendered yet"/>
            </div>

            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="btn-login" onClick={ ()=> {
                        btnName==="Logout"?btnName="Login":btnName="Logout"
                        setBtnName(btnName);
                        console.log(btnName);
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};
// Default Export
export default Header;

// Using named export as default export
// const MyComponent = () => {
//     // Your component code here
// };

// export { MyComponent as default, MyComponent };