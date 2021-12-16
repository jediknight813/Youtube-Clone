import React from 'react';
import ReactDOM from 'react-dom';
import ChannelData from './components/ChannelData'
import Comments from './components/Comments'
import Header from './components/Header'
import Video from './components/video'
import VideoData from './components/VideoData'
import RecomendedVideos from './components/RecomendedVideos'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Video />
    <VideoData />
    <ChannelData />
    <Comments />
    <RecomendedVideos />
  </React.StrictMode>,
  document.getElementById('root')
);

