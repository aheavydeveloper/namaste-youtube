import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'

const Maincontainer = () => {
  const buttonList = ['All', 'Music', 'Movies', 'Games', 'Cricket', 'Soccor', 'Trending', 'Travel', 'Data-analysys', 'Java' , 'Full-Stack']
  return (
    <div className=''>
      <div className='flex gap-6'>
        {buttonList.map((item) => <Buttonlist key={item} data={item} />)}
        </div>
      <VideoContainer/>
    </div>
  )
}

export default Maincontainer