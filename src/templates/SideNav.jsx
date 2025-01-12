
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const SideNav = () => {
  
    return (
        <>
            <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
                <h1 className='text-2xl font-bold mr-2 text-white'>
                    <i className="text-[#6556CD] ri-tv-fill "></i>
                    <span> movie-app</span></h1>
                <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
                    <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>

                    <Link to="/trending"

                     className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
                    <i className="mr-2 ri-fire-fill"></i> Trending</Link>

                    <Link to="/popular"
                    className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
                    <i className="mr-2 ri-shining-fill"></i> Popular</Link>

                    <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'>
                    <i className="mr-2 ri-movie-2-fill"></i> Movies</Link>
                    <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'> <i className="mr-2 ri-tv-fill"></i>TV shows</Link>
                    <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className=" mr-2 ri-team-fill"></i> People</Link>
                   <hr className='border-noneh-[1px] bg-zinc-100' />
                </nav>
                <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
                    <h1 className='text-white font-semibold text-xl mt-10 mb-5'>website Information</h1>
                    <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className="mr-2 ri-information-fill"></i>About</Link>
                    <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5'><i className=" mr-2 ri-phone-fill"></i>Contact</Link>
                </nav>
            </div>
        </>
    )
}

export default SideNav