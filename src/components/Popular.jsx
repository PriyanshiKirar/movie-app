import React, { useState,useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios  from '../utils/axios';
import Loading from './Loading';
import Dropdown from '../templates/Dropdown';
import TopNav from '../templates/TopNav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cadrs from '../templates/Cadrs';

const Popular = () => {
    const navigate = useNavigate();
    const [categary, setcategary] = useState("movie");
    // const [duration, setduration] = useState("day");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hashMore, sethashMore] = useState(true)

    document.title="Popular" + categary.toUpperCase()
  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${categary}/popular?page=${page}`)
      console.log(data);

      if (data.results.length > 0) {

        setpopular((prevState) => [...prevState, ...data.results]);
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
    if (popular.length === 0) {
      GetPopular();
    }
    else {

      setpage(1);
      setpopular([]);
      GetPopular();
    }
  }


  useEffect(() => {
    // GetTrending();
    RefreceHandler();
  },
    [categary])
   
    return popular.length ? (
      <div className='w-screen h-screen  '>
        <div className='px-[5%] w-full  flex items-center justify-between '>
  
          <h1 className='w-[20%] text-2xl text-zinc-400 font-semibold '>
            <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2"></i>
            popular</h1>
          <div className='flex items-center w-[80%]'>
  
            <TopNav />
            <Dropdown
              title="Categary" options={["movie", "tv"]} func={(e) => setcategary(e.target.value)} />

            <div className='w-[2%]'> </div>
           
          </div>
        </div>
        <InfiniteScroll
          dataLength={popular.length}
          next={GetPopular()}
          hasMore={hashMore}   //isse loading dikheing  means or api call krni h ki ni data show krne k liye
          loader={<h1>Loading.....</h1>}>
  
          <Cadrs data={popular} title={categary} />
        </InfiniteScroll>
  
      </div>
    ) : <Loading/>

  }

export default Popular