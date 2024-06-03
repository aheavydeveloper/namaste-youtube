import React from 'react'

const ChatMessage = ({name , message }) => {
  return (
      <div className='flex mx-2 py-2 shadow-md items-center gap-3'>
          
          <img className='h-8 rounded-full' alt="NA" src="https://yt3.ggpht.com/PPDmfVzsh3cSfTCIWuQ4ZpYd3Cd7YdXBydAlj156E06Yz9mRlNDVsqGxR_osx68bJeyN55dJ=s68-c-k-c0x00ffffff-no-rj">
          </img>

          <span>{name}</span>
          <span>{ message}</span>

     </div>
  )
}

export default ChatMessage