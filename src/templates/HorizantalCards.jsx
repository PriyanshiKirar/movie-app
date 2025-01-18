// import React from 'react'
// import { Link } from 'react-router-dom'

// const HorizantalCards = ({ data }) => {
//     // console.log(data)
//     return (
    

//             <div className='w-[100%]  flex  overflow-y-hidden  m-5'>
//                 {data.map((d, i) => (
//                   <Link to={`/${d.media_type}/details/${d.id}`} key={i}
//                         className='min-w-[20%]  bg-zinc-900 mr-5 mb-5'>

//                         <img className='w-full h-[50%] object-cover'
//                             src={`https://image.tmdb.org/t/p/original/${d.backdrop_path
//                                 || d.poster_path
//                                 }`} alt="" />

//                         <div className='text-white p-3 h-[45%]'>
//                             <h1 className=' text-xl font-semibold  '>
//                                 {d.title ||
//                                     d.name ||
//                                     d.original_name ||
//                                     d.original_title}
//                             </h1>
//                             <p className=' text-xl '>{d.overview.slice(0, 50)}...
//                                 <span className='text-zinc-500'>more</span></p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
       
//     )
// }

// export default HorizantalCards


import React from 'react'
import { Link } from 'react-router-dom'

const HorizantalCards = ({ data }) => {
    return (
        <div className='w-[100%] flex overflow-y-hidden m-5'>
            {data.map((d, i) => (
                <Link 
                    to={`/${d.media_type}/details/${d.id}`} 
                    key={i} 
                    className='min-w-[20%]  bg-zinc-900 mr-5 mb-5'
                >
                    <img 
                        className='w-full h-[50%] object-cover'
                        src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} 
                        alt="" 
                    />
                    <div className='text-white p-3 h-[45%] overflow-y-auto'>
                        <h1 className='text-xl font-semibold'>
                            {d.title || d.name || d.original_name || d.original_title}
                        </h1>
                        <p className='text-xl'>
                            {(d.overview?.slice(0, 50) || '')}...
                            <span className='text-zinc-500'>more</span>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default HorizantalCards
