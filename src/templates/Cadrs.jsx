import React from 'react'
import { Link } from 'react-router-dom'

const Cadrs = ({ data }) => {
    console.log(data)
    return (
        <div className='flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]'>

            {data.map((c, i) =>(

             <Link  className='relative w-[37vh]  mr-[5%] mb-[5%]' key={i}>
                <img 
                className=' shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[47vh] object-cover'
                 src={`https://image.tmdb.org/t/p/original/${c.backdrop_path
                    || c.poster_path || c.profile_path}`} alt="" />
                <h1 className='text-xl text-zinc-300 mt-3 font-semibold'>

                
                    {c.title ||
                        c.name ||
                        c.original_name
                        || c.original_title
                    }
                </h1>
                {c.vote_average &&(

                <div className=' absolute right-[-10%] bottom-[25%]
                 text-white w-[6vh] text-xl font-semibold rounded-full h-[6vh] flex justify-center items-center bg-yellow-600'>
                    {(c.vote_average*10).toFixed() } <sup>%</sup>
                </div>
                )}
            </Link>
        ))}
        </div>
    )
}

export default Cadrs