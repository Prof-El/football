import React, {useState, useEffect} from "react";

import manLogo from "../Images/manLogo.png";
import atLogo from "../Images/atLogo.png";



export default function Prediction(){
   


    const [score, setScore] = useState({
        team1: 0,
        team2: 0
    })

    const handleClick=()=>{
        setScore({
            team1: Math.floor((Math.random() * 5) + 1),
            team2: Math.floor((Math.random() * 5) + 1)
        })
    }

    

   

    return(
        <div >
            
            
                <div className="prediction--box">
                    <div className="prediction">
                        <div className="man--pred">
                            <div className="man--pre--logo">
                                <img src={manLogo} alt="" />
                                <h6>Manchester United</h6>
                            </div>
                            <h6>{score.team1}</h6>
                        </div>
                            
                        <div className="at--pred">    
                            <div className="at--pre--logo">
                                <img src={atLogo} alt="" />
                                <h6>Atletico Madrid</h6>
                            </div>
                            <h6>{score.team2}</h6>
                        </div>
                    </div>
                    <p className="time">Wed, 23 Feb  21:00</p>
                </div>
                <button onClick={handleClick} className="button">Predict Score</button>
                
                
    
            
        </div>
    )
}