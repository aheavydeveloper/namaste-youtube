import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS } from '../utils/apilsit'
import VideoCard from './VideoCard'
import ContainerShimmer from './ContainerShimmer'

const VideoContainer = () => {
  const[videos , setVideos] = useState([])
  useEffect(() => { getVideos() }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS)
    const json = await data.json()
    // console.log(json.items)
    setVideos(json.items)
  }

  return videos.length ===0 ? <ContainerShimmer/> : (
    <div className='mt-4 flex flex-wrap justify-between'>
   { videos.map((video_details) =><VideoCard key={video_details.id} data={video_details} />)}
    </div>
    
  )
}

export default VideoContainer