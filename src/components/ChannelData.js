import React from "react";
import '../styles/channelStyles.css'
import channelDataIcon from '../icons/channelData.jpg'


function ChannelData(){


    return (
        <div className="channelData">
            <img alt="channel data" src={channelDataIcon} style={{width: "100%"}} />
        </div>
    )
}


export default ChannelData