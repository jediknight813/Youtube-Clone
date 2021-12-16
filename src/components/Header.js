import React from "react";
import '../styles/channelStyles.css'
import youtube_logo from '../icons/youtubeIcon.jpg'
import loginIcon from '../icons/signinIcon.jpg'

function Header() {


    return(
        <div className="Header"> 
            <img className="youtube_logo" alt="youtube icon" src={youtube_logo} /> <h1 style={{left: "6.3%", position: "absolute", fontSize: "20px", top: "15%"}}> TimeWaster </h1> 
            <input placeholder="Search" type="text" style={{left: "29%", position: "absolute", top: "20%", width: "34.5%", height: "55%", color: "white" ,backgroundColor: "rgb(24,24,24)", border: "none", fontSize: "20px"}}/>
            <button className="search_button"> 🔍 </button>
            <img className="signinIcon" src={loginIcon} alt="sign in icon" />
        </div>
    )
}


export default Header