import React, { useState,useEffect } from 'react'
import axios from '../utils/axios';
import { Link } from 'react-router-dom'
const TopNav = () => {

    const [query,setquery]=useState("");
    const [searches,setsearches]=useState([]);
   const GetSerches=async()=>{
         try{
 const {data}=await axios.get(`/search/multi?query=${query}`)
//  console.log(data);
 setsearches(data.results || [])
         }
         catch(error){
 console.log("Error",error)
         }
             }
             useEffect(()=>{
                 GetSerches();  
             },
             [query])

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
             {searches.map((s,i)=>(

                 <Link key={i}
                  className='text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300
                   duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 gap-4 border-zinc-100'>
                <img className='w-[13vh] h-[13vh] object-cover rounded shadow-lg'
                src={`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`}

                 alt="no image" />
                 <span>
                    {s.title ||
                     s.name ||
                      s.original_name
                       || s.original_title
                        }</span>
                 </Link>  
             ))}

              
            </div>
        </div>

    )
}

export default TopNav


// import React, { useState, useEffect } from 'react';
// import axios from '../utils/axios';
// import { Link } from 'react-router-dom';

// const TopNav = () => {
//     const [query, setQuery] = useState('');
//     const [searches, setSearches] = useState([]); // Initialize as an empty array

//     const getSearches = async () => {
//         try {
//             const { data } = await axios.get(`/search/multi?query=${query}`);
//             console.log(data);
//             setSearches(data.results || []); // Ensure results are an array
//         } catch (error) {
//             console.log('Error', error);
//         }
//     };

//     useEffect(() => {
//         if (query.trim() !== '') { // Prevent unnecessary API calls when query is empty
//             getSearches();
//         } else {
//             setSearches([]); // Clear searches when query is empty
//         }
//     }, [query]);

//     return (
//         <div className="w-full h-[10vh] flex justify-start items-center ml-[15%]">
//             <i className="text-3xl text-zinc-400 ri-search-line"></i>
//             <input
//                 onChange={(e) => setQuery(e.target.value)}
//                 value={query}
//                 className="w-[50%] mx-10 p-5 text-xl outline-none bg-transparent text-zinc-200"
//                 type="text"
//                 placeholder="Search anything"
//             />
//             {query.length > 0 && (
//                 <i
//                     onClick={() => setQuery('')}
//                     className="text-3xl text-zinc-400 ri-close-fill"
//                 ></i>
//             )}

//             {searches.length > 0 && (
//                 <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[20%] overflow-auto rounded">
//                     {searches.map((s, i) => (
//                         <Link
//                             key={i}
//                             className="text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
//                             to="#"
//                         >
//                             <img src={s.image || ''} alt={s.title || 'Result'} />
//                             <span>{s.title || s.name || s.original_name || s.original_title }</span>
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TopNav;
