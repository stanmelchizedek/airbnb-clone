/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Card(props){
    let spot;
    if(props.openSpots === 0){
        spot = "SOLD OUT"
    }else{
        spot = "AVAILABLE"
    }

    return (
        <div className="card-container">
            <div className="card-badge">{spot}</div>
            <img className="card-image" src={`/assets/${props.img}`}/>
            <div className="rating-stats">
                <img src="/assets/star.png" alt="" />
                <span>{props.rating}</span>
                <span className="text-gray">({props.reviewCount}) • USA</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}