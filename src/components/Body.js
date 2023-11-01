import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () =>{

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437");
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const json = await response.json();
            // setListOfRestaurant(jso)
            console.log("response ---> " + JSON.stringify(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants));
            setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    

    // 
     const [listOfRestaurant, setListOfRestaurant] = useState([]);

     if(listOfRestaurant.length === 0){
        return (<div>Loading.....</div>);
     }

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
