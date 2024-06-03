import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import { YOUTUBE_VIDEOS_DOMAIN, APIKEY } from '../utils/apilsit';
import { useEffect } from 'react';
import Comments from './Comments';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get('v'))
  // const sowSidebar = useSelector((store) => store.sidebar.showSideBar)
  const [videoDetail, setVideoDetail] = useState({})
  useEffect(() => {
    getVideoDetails()
  }, [])

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_DOMAIN + '&id=' + searchParams.get('v') + '&key=' + APIKEY)
    const json = await data.json()
    console.log(json.items[0])
    setVideoDetail(json.items[0])
  }
  
  return (!('snippet' in videoDetail) ? null :
    <div className='flex flex-row w-[1100px]  mx-auto  mt-10'>

      <div className='w-[650px]'>
        <iframe className='rounded-lg' width="650" height="350" src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?si=qcpGFo2jH6SwyJ51"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h2 className='text-xl font-bold mb-3 mt-2 '>{videoDetail.snippet.title}</h2>
        <div className='flex flex-row justify-between'>
          <div className='flex gap-2'>
            <img className='rounded-full w-10' alt='oops!!' src='https://yt3.ggpht.com/33H4JE7AgaOmwKz5yisVt1mHN-n43vfb7CY3BqZvhb6vBXkk3_DCopAWMty6-fBKBKZR9y5FSA=s88-c-k-c0x00ffffff-no-rj'></img>
            <button className='border border-solid border-black px-4 py-1 rounded-2xl bg-gray-900 text-white'>Join</button>
            <button className='border border-solid border-black px-4 py-1 rounded-2xl bg-gray-100'>Subscribe</button>
          </div>
          <div className='flex gap-2'>
            <button className='border border-solid border-black px-4 py-1 rounded-2xl bg-gray-100'>👍🏻 Like</button>
            <button className='border border-solid border-black px-4 py-1 rounded-2xl bg-gray-100'>👎🏻 DisLike</button>
            <button className='border border-solid border-black px-4 py-1 rounded-2xl bg-gray-100'>Share</button>
            <button className='border border-solid border-black px-4 py-1 rounded-2xl bg-gray-100'>...</button>
          </div>
        </div>
        <Comments/>
      </div>

      <div className=' basis-auto w-[400px] ml-5' >
        <LiveChat/>
      </div>


    </div>


  )
}

export default WatchPage