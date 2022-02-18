import championsLogo from "../Images/champions-league-logo.png"



export default function Bar(){


    return(
        <div className="bar">
            <div className="logo">
                <img src={championsLogo} alt="" />
                <h3>UEFA Champions League</h3>
            </div>
            <p>Round of 16 - Leg 1 of 2</p>
            <div>
                <a href="#">PREDICTION</a>
            </div>
            
        </div>
    )
}