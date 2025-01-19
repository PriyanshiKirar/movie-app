import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Notfound from '../components/Notfound'
const Trailer = () => {
 const  navigate= useNavigate()
  const {pathname}=useLocation();
  const categary=pathname.includes("movie") ? "movie" :"tv"
 const ytvideo= useSelector(state=>state[categary].info.videos)
//  console.log(pathname.includes("movie"),ytvideo)
console.log(ytvideo)
  return (
    <div className='top-[0%] left-[0%] bg-[rgba(0,0,0,0.9)] z-[100] text-3xl absolute w-full 
    h-screen flex items-center justify-center'>
    <Link onClick={() =>
       navigate(-1)} className="hover:text-[#6556CD] ri-close-fill ml-2 absolute text-white right-[5%] top-[5%]"></Link>
{ytvideo ? (
  <ReactPlayer  
height={400}
width={1000}
url={`https://www.youtube.com/watch?v=${ytvideo.key}`
 }
 />
 ) :(
 <Notfound/>

 )}

        </div>
  )
}

export default Trailer

