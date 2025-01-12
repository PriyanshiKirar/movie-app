import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import TopNav from '../templates/TopNav'
import Dropdown from '../templates/Dropdown'
import axios from '../utils/axios'
import Cadrs from '../templates/Cadrs'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const navigate = useNavigate();
  const [categary, setcategary] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hashMore, sethashMore] = useState(true)

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${categary}/${duration}?page=${page}`)
      console.log(data);

      // settrending(data.results);
      if (data.results.length > 0) {

        settrending((prevState) => [...prevState, ...data.results]);
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
    if (trending.length === 0) {
      GetTrending();
    }
    else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  }


  useEffect(() => {
    // GetTrending();
    RefreceHandler();
  },
    [categary, duration])
  return trending.length ? (
    <div className='w-screen h-screen  '>
      <div className='px-[5%] w-full  flex items-center justify-between '>

        <h1 className='w-[20%] text-2xl text-zinc-400 font-semibold '>
          <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2"></i>
          Treding</h1>
        <div className='flex items-center w-[80%]'>

          <TopNav />
          <Dropdown
            title="Categary" options={["movie", "tv", "all"]} func={(e) => setcategary(e.target.value)} />
          <div className='w-[2%]'>

          </div>
          <Dropdown
            title="Duration" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
        </div>


      </div>


      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending()}
        hasMore={hashMore}   //isse loading dikheing  means or api call krni h ki ni data show krne k liye
        loader={<h1>Loading.....</h1>}>

        <Cadrs data={trending} title={categary} />
      </InfiniteScroll>

    </div>
  ) : <Loading />
}

export default Trending