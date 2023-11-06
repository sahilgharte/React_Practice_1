import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RES_INFO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const params = useParams();
    console.log("---> "+ params.id)

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchMenu()
    }, [])


    const fetchMenu = async () => {
        const data = await fetch(RES_INFO_URL+params.id);
        const json = await data.json();



        console.log("Menu API Called -> " + json.data)
        setResInfo(json?.data)
    }

    if (resInfo === null){
        return <Shimmer/>
    }


    const {name, areaName, avgRating, city, parentId, totalRatingsString, costForTwoMessage, cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards, title} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
                <h2>{title}</h2>
                <ul>
                   { itemCards.map((res) => (
                   <li key={res.card.info.id}>{res.card.info.name} - {res.card.info.description}</li>
            
                   
                   ))}
                    {/* <li>Burger</li>
                    <li>Paneer Chilli</li> */}
                </ul>
            </div>

        </div>
    );
}

export default RestaurantMenu;