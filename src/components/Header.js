import React from "react";
import { APP_LOGO } from "../utils/constants";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo">
                <img src={APP_LOGO} alt="LOGO not rendered yet"/>
            </div>

            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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