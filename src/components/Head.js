import React, { useEffect, useState } from 'react'
import { show_hide } from '../utils/sidebarSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AUTOCOMPLETE_API } from '../utils/apilsit'
import { setSerchText } from '../utils/cacheSlice'

// Note : supposing i am typing slow , each time i  press a key the Head component is getting render 3 times , first is onChange , 2nd  render happended when we make an api call and update the setSuggestions state variable , and thirdly when we update our search-cache (since this head component is in sync or subscribed to the searchCache).

// Irrespective of all the renders  happening react is taking care of the faster DOM manipulation ,all becz of  the reconsiliation algorithm or say the diff algo of react.

const Head = () => {
  // console.log('Hollas')
  const dispatch = useDispatch()
  const handleShowSideBar = () => {
    dispatch(show_hide())
  }
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchCache = useSelector((store) => store.searchCache);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText])
      }
      else {
        getAutocompleteText(searchText)
      }
    }, 200)
    // thisa
    return () => { clearTimeout(timer) }
  }, [searchText])

  async function getAutocompleteText(searchQuery) {
    const data = await fetch(AUTOCOMPLETE_API + searchQuery)
    const json = await data.json()
    // console.log(json[1])
    setSuggestions(json[1])
    // update cache
    dispatch(setSerchText({[searchQuery]:json[1]}))
  }

  return (
    <div className='grid grid-flow-col m-2 shadow-lg'>

      <div className='flex col-span-2  '>
        <img onClick={handleShowSideBar} className='h-6 cursor-pointer' alt="oops" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=='></img>
        <Link to={'/'}><img className='h-6 ml-6' alt="opps!!" src="data:image/png;base64,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"></img>
        </Link>
      </div>

      <div className=' col-span-9 relative '>
        <input value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
          type='text' className='border border-black w-1/2 p-2  rounded-l-full' placeholder='Search'></input>
        
        <button className=' border border-black rounded-r-full p-2 bg-gray-100'>🔍</button>

        <ul className='absolute  bg-gray-100 rounded-lg w-[36rem]'>
          {showSuggestions && suggestions.map((item) => <li className='py-1 px-3 hover:bg-gray-300' key={item}>{item}</li>)}
        </ul>
      </div>

      <div className='flex '>
        <img className='h-6 col-span-1' alt="opps!!" src='data:image/png;base64,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'></img>
      </div>

    </div>
  )
}

export default Head