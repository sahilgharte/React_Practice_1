import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    console.log("----> "+ props)

    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;

    return (
        // style={{backgroundColor: "#f0f0f0"}} -> inline styling format
        <div className="res-card"> 
                <img alt="Card-Image" src={CDN_CARD_IMG_URL + cloudinaryImageId}/>
            <div className="card-info">
                <div>
                    <h4>{name}</h4>
                    <h5>{cuisines.join(", ")}</h5>
                </div>
                <div className="card-details">
                    <h5>{avgRating}</h5>
                    <h5>{costForTwo}</h5>
                    <h5>{sla.deliveryTime} Minutes</h5>
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;