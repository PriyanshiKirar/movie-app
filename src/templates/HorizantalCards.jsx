import React from 'react'
import { Link } from 'react-router-dom'
const HorizantalCards = ({ data }) => {
    return (
        <div className='w-full h-[40vh] p-5'>
            <div className='mb-5'>
                <h1 className='text-3xl text-zinc-400 font-semibold '>
                    Treding</h1>
            </div>
            <div className='w-full flex overflow-x-auto'>
                {data.map((d, i) => (
                    <div key={i} className='min-w-[15%] mr-5 bg-red-100'>
                        <img src="" alt="" />
                        <h1 className='text-xl font-black text-white w-[70%]'>
                            {d.title ||
                             d.name || 
                             d.original_name ||
                              d.original_title}
                        </h1>
                        <p className='w-[70%] text-white text-xl mt-3 mb-3'>{d.overview.slice(0,50)}...
                        <span className='text-blue-400'>more</span></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HorizantalCards