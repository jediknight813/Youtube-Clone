import React from "react";
import '../styles/channelStyles.css'
import videodataicon from '../icons/VideoInfo.jpg'
import videosidebar2 from '../icons/sidebarvideo2.png'

function VideoData() {


    return(
        <div className="videoData">
            <img style={{width: "100%"}} alt="video info" src={videodataicon} />
            <img style={{top: "180%", right: "-41%", position: "absolute", width: "37%", zIndex: "4"}} alt="video info" src={videosidebar2} />
        </div>
    )
}


export default VideoData