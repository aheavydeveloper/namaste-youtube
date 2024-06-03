import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage ,clearMessages } from '../utils/chatSlice';
import {generateRandomName , makeRandomMessage } from '../utils/helpers'

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.message)
    
    useEffect(() => {
        const i = setInterval(() => {
            // api call and map over the result to set data inside  our redux store
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20) + " 🚀",
                })
            )
        }, 1500)
        return () => {
            dispatch(clearMessages())
            clearInterval(i)
        }} , [])

    return (
      <>
      <div className='overflow-y-scroll h-[500px] bg-slate-50 flex  flex-col-reverse'>
          {
              chatMessages.map((chat, index) => {
                  return ( <ChatMessage key={index} name={chat.name} message={chat.message} /> )
              })
          }
            </div>
            <form className='mt-4  flex gap-4' onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target.message.value)
                dispatch(addMessage({
                        name: "janmajaya",
                        message: e.target.message.value,}))
            }}>
                <input required className='border border-black bg-gray-100 w-[300px] rounded-lg px-4 py-1' type='text' name='message'></input>
                <button type="Submit"    className=' cursor-pointer border border-black rounded-lg bg-green-100 px-1 block w-[60px] text-center'>Send</button>
            </form>
            </>
      
  )
}

export default LiveChat