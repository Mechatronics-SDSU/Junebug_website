import { useNavigate } from "react-router-dom";
import "./restcard.css";
import {createElement} from "react"
import React, {useState} from 'react';

function RestCard({object, route}) {
    const navigate = useNavigate();
    const handleClick = () => {
        if(route) navigate(route, {replace: true});
    }

    console.log(object.imname);
    return (
        
        <div className="card" onClick={handleClick}>
            <div className="card-image">
                <img src={object.imname}  alt={`${object.name}`}/>
            </div>
            <div className="card-title">
                {object.name}
            </div>
            <div className="card-body">
                <p>{object.cuisine}</p>
            </div>
        </div>
    );
}

export default RestCard;