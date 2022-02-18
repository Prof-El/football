import React, {useState} from "react";

import ManData from './ManData';
import AtData from "./AtData";
import manLogo from "../Images/manLogo.png";
import atLogo from "../Images/atLogo.png";


export default function LineUp(){
    


        const ManDataElement = ManData.map(item=>{
            return <div key={item.id}> 
                
                <p className="player">{item.name}</p>
            </div>
        })

        const AtDataElement = AtData.map(item=>{
            return <div key={item.id}> 
                
                <p className="player">{item.name}</p>
            </div>
        })

    return(
        <div className="lineUp">
            <div className="lineUp--title">
                <div className="man--logo">
                    <img src={manLogo} alt="" />
                    <h6>Manchester United</h6>
                </div>
                <h4>VS</h4>
                <div className="at--logo">
                    <img src={atLogo} alt="" />
                    <h6>Atletico Madrid</h6>
                </div>
            </div>
            <div className="lineUp--box">
                <div className="manu--lineup">
                    {ManDataElement}
                </div>
                
                <div className="at--lineUp">
                    {AtDataElement}
                </div>
            </div>
        </div>
    )
}