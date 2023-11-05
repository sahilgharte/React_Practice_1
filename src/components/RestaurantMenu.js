import React from "react";
import { useEffect } from "react";

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=456986


const RestaurantMenu = () => {

    // useEffect(()=> {
    //     fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=456986");
    // }, [])

    return (
        <div>
            <div className="res-card-heading">
                <h1>Name of the Restaurant</h1>
                <h2>Menu</h2>
            </div>

            <div className="res-card-menu">
                <ul>
                    <li>Biryani</li>
                    <li>Burger</li>
                    <li>Paneer Chilli</li>
                </ul>
            </div>

        </div>
    );
}

export default RestaurantMenu;