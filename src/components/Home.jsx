import React, { useEffect, useState } from 'react'
import SideNav from '../templates/SideNav'
import TopNav from '../templates/TopNav'
import axios from '../utils/axios'
import Header from '../templates/Header'
import HorizantalCards from '../templates/HorizantalCards'
import Dropdown from '../templates/Dropdown'
import Loading from './Loading'
const Home = () => {
  document.title = "homePage"
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);  //for cards show used to
  const [categary, setcategary] = useState("all")

  const GetHeaderwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`)
      //  console.log(data);
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    }
    catch (error) {
      console.log("Error", error)
    }
  }

  // console.log(wallpaper)


  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${categary}/day`)
      //  console.log(data);

      settrending(data.results);
    }
    catch (error) {
      console.log("Error", error)
    }
  }

  console.log(trending, "trending data")
  
  useEffect(() => {
    GetTrending()
    !wallpaper && GetHeaderwallpaper()
    // !trending && GetTrending();
  },
    [categary])

  console.log(categary)
  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className='w-[80%] h-full'>
        <TopNav />
        <Header data={wallpaper} />
        <div className='mb-5 flex justify-between p-5 '>
          <h1 className='text-3xl text-zinc-400 font-semibold '>
            Treding
          </h1>
          <Dropdown title="Filter" options={['tv', 'movie', 'all',]} func={(e) => setcategary(e.target.value)} />
        </div>

        <HorizantalCards data={trending} />
      </div>
    </>
  ) : <Loading />
}

export default Home
