import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=456986


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState("");

    useEffect(()=> {
        fetchMenu()
    }, [])

if (resInfo === null){
        return <Shimmer/>
    }

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=456986");
        const json = await data.json();



        console.log("Menu API Called -> " + json.data)
        setResInfo(json?.data?.cards[0]?.card?.card?.info)
    }


    const {name, areaName, avgRating, city, parentId, totalRatingsString, costForTwoMessage, cuisines} = resInfo

    return (
        <div>
            <div className="res-card-heading">
                <h1>{name} , 🏠 {areaName}, {city}</h1>
                <h3>Rating: {avgRating}⭐ , {totalRatingsString}</h3>
                <h4>{costForTwoMessage}</h4>
                <h4>{cuisines}</h4>
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