import React from 'react'
import ReactPlayer from 'react-player'

const Trailer = () => {
  return (
    <div className='top-[0%] left-[0%] bg-[rgba(0,0,0,0.9)] z-[100] text-3xl absolute w-full 
    h-screen flex items-center justify-center'>
    

<ReactPlayer url={`https://www.youtube.com/watch?v=${"heey"}`}/>
        </div>
  )
}

export default Trailer

