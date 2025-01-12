import React from 'react'
import { Link } from 'react-router-dom'

const Cadrs = ({ data }) => {
    return (
        <div className='flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]'>
            {data.map((c, i) => <Link className='w-[37vh]  mr-[5%] mb-[5%]'
                key={i}>
                <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[47vh] object-cover'
                 src={`https://image.tmdb.org/t/p/original/${c.backdrop_path
                    || c.poster_path}`} alt="" />
                <h1 className='text-xl text-zinc-300 mt-3 font-semibold'>
                    {c.title ||
                        c.name ||
                        c.original_name
                        || c.original_title
                    }
                </h1>
            </Link>)}
        </div>
    )
}

export default Cadrs