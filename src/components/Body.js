import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
            // console.log("response ---> " + JSON.stringify(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants));
            setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    

    // 
     const [listOfRestaurant, setListOfRestaurant] = useState([]);
     const [filterListOfRestaurant, setFilterListOfRestaurant] = useState([]);
    //  const [searchFilter, setSearchFilter] = useState("");

    //  Conditional Rendering
        return listOfRestaurant.length === 0? <Shimmer/> :  (
        <div className="body">
            <div className="res-filter-btn">


                <div className="search">
                    <input type="text" className="search-box" onChange={(e)=>{
                        // setSearchFilter(e.target.value)

                        const filteredRestaurant = listOfRestaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(e.target.value.toLowerCase());   
                        })

                        setFilterListOfRestaurant(filteredRestaurant);
                    
                    }} />
                    {/* <button onClick={() => { 
                        console.log(searchFilter);

                        const filteredRestaurant = listOfRestaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchFilter.toLowerCase());   
                        })

                        setFilterListOfRestaurant(filteredRestaurant);


                    }}>search</button> */}
                </div>



                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    console.log(filterList);
                    setFilterListOfRestaurant(filterList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                    {
                        // we can use index a key but it is a very bad practice
                        // Unique Key >>>>>>>>> index
                        // Only use index if and only if there is no unique is
                        filterListOfRestaurant.map((restaurant, index) => (
                            <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData = {restaurant} /></Link>
                        ))
                    }

    
            </div>
        </div>
    );
}

export default Body;
