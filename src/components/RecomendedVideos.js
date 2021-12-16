import React from "react";
import '../styles/channelStyles.css'
import SidebarVideos from '../icons/SidebarVideos.jpg'

function RecomendedVideos() {


    return (
        <div className="recomended_video_sidebar">
            <img alt="sidebarvideos" src={SidebarVideos} style={{width: "100%"}} />
        </div>
    )
}


export default RecomendedVideos