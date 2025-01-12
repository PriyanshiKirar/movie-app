import React from 'react'
import Loader from '/Loader.gif'
const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-lack'>
        <img className=' object-conver' src={Loader} alt="" />
    </div>
  )
}

export default Loading