import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const TopNav = () => {

    const [query,setquery]=useState("");
    console.log(query)


    return (
        <div className='w-full h-[10vh] flex justify-start items-center ml-[15%]'>
            <i className=" text-3xl text-zinc-400 ri-search-line"></i>
            <input onChange={(e)=> setquery(e.target.value)}
            value={query}
            className='w-[50%] mx-10 p-5 text-xl outline-none bg-transparent text-zinc-200' type="text" 
            placeholder='Serach anything'
            />
            {query.length>0 && (
             <i onClick={()=>setquery("")} className=" text-3xl text-zinc-400 ri-close-fill"></i>
 
            )}

            <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[20%] overflow-auto rounded'>
                {/* <Link className='text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100'>
                    <img src="" alt="" />
                    <span>heyyty evryone</span>
                </Link> */}
              
            </div>
        </div>

    )
}

export default TopNav