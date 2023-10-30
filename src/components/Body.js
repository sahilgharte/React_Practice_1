import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

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
