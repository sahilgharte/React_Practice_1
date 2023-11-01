import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () =>{

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437");

        
        const json = await data.json();
        console.log(json);
    }

    // 
     const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="res-filter-btn">
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    console.log(filterList);
                    setListOfRestaurant(filterList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                    {
                        // we can use index a key but it is a very bad practice
                        // Unique Key >>>>>>>>> index
                        // Only use index if and only if there is no unique is
                        listOfRestaurant.map((restaurant, index) => (
                            <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                        ))
                    }

    
            </div>
        </div>
    );
}

export default Body;
