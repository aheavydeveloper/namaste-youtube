import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // console.log(store.sidebar)
  const sowSidebar = useSelector((store) => store.sidebar.showSideBar)
  // console.log(sowSidebar)
  if(sowSidebar===false) return null;
  return (
    <div className=' flex flex-col gap-4 p-8  '>
      <ul className='flex flex-col gap-2 border-b-2'>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'>Shorts</li>
        <li className='font-bold'>Subsriptions</li>
      </ul>

      <div className=' border-b-2'>
        <h3 className='font-bold mb-2'>You</h3>
        <ul className='flex flex-col gap-2' >
        <li>Your Channel</li>
        <li>History</li>
        <li>Playlist</li>
        </ul>
      </div>

      <div className=' border-b-2'>
        <h3 className='font-bold mb-2'>Explore</h3>
        <ul className='flex flex-col gap-2'>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Games</li>
        <li>Cricket</li>
        <li>Trailers</li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar
