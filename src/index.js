import React from 'react';
import ReactDOM from 'react-dom';
import ChannelData from './components/ChannelData'
import Comments from './components/Comments'
import Header from './components/Header'
import Video from './components/video'
import VideoData from './components/VideoData'
import RecomendedVideos from './components/RecomendedVideos'

import './styles/channelStyles.css'


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <Video />
      <VideoData />
      <ChannelData />
      <Comments />
      <RecomendedVideos />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

