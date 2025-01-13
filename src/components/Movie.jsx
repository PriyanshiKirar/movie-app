
import React, { useState,useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios  from '../utils/axios';
import Loading from './Loading';
import Dropdown from '../templates/Dropdown';
import TopNav from '../templates/TopNav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cadrs from '../templates/Cadrs';
const Movie = () => {

     const navigate = useNavigate();
        const [categary, setcategary] = useState("now_playing");
        // const [duration, setduration] = useState("day");
        const [movie, setmovie] = useState([]);
        const [page, setpage] = useState(1);
        const [hashMore, sethashMore] = useState(true)

 document.title="Popular" + categary.toUpperCase() + "s"
const GetMovie = async () => {
 try {
    const { data } = await axios.get(`/movie/now_playing?page=${page}`);

   console.log(data);

   if (data.results.length > 0) {

     setmovie((prevState) => [...prevState, ...data.results]);
     setpage(page + 1);
   } else {
     sethashMore(false)
   }
 }
 catch (error) {
   console.log("Error", error)
 }
}
// console.log(trending)

// ek hi page repeat ho rha tha isliye ye function bana ry h

const RefreceHandler = () => {
 if (movie.length === 0) {
   GetMovie();
 }
 else {

   setpage(1);
   setmovie([]);
   GetMovie();
 }
}


useEffect(() => {
 // GetTrending();
 RefreceHandler();
},
 [categary])

 return movie.length ? (
   <div className='w-screen h-screen  '>
     <div className='px-[5%] w-full  flex items-center justify-between '>

       <h1 className='w-[20%] text-2xl text-zinc-400 font-semibold '>
         <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2"></i>
         movie
         </h1>
       <div className='flex items-center w-[80%]'>

         <TopNav />
         <Dropdown
           title="Categary" options={["popular", "top_rated","upcoimg","now_playing"]} func={(e) => setcategary(e.target.value)} />

         <div className='w-[2%]'> </div>
        
       </div>
     </div>
     <InfiniteScroll
       dataLength={movie.length}
       next={GetMovie()}
       hasMore={hashMore}   //isse loading dikheing  means or api call krni h ki ni data show krne k liye
       loader={<h1>Loading.....</h1>}>

       <Cadrs data={movie} title={categary} />
     </InfiniteScroll>

   </div>
 ) : <Loading/>

}


export default Movie