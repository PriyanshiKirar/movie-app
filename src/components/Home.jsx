import React, { useEffect, useState } from 'react'
import SideNav from '../templates/SideNav'
import TopNav from '../templates/TopNav'
import axios from '../utils/axios'
import Header from '../templates/Header'
import HorizantalCards from '../templates/HorizantalCards'
const Home = () => {
    document.title="homePage"
    const [wallpaper,setwallpaper]=useState(null);
const  [trending,settrending]=useState(null);

    const GetHeaderwallpaper= async () => {
      try {
          const { data } = await axios.get(`/trending/all/day`)
          //  console.log(data);
          let randomdata=data.results[(Math.random() * data.results.length).toFixed()];
          setwallpaper(randomdata);
      }
      catch (error) {
          console.log("Error", error)
      }
  }

  // console.log(wallpaper)


  const GetTrending= async () => {
    try {
        const { data } = await axios.get(`/trending/all/day`)
        //  console.log(data);
      
        settrending(data.results);
    }
    catch (error) {
        console.log("Error", error)
    }
}
console.log(trending,"trending data")
  useEffect(()=>{
    !wallpaper && GetHeaderwallpaper()
    !trending && GetTrending();
  },
  [])


  return  wallpaper && trending ? (
    <>
  <SideNav/>
    <div className='w-[80%] h-full'>
        <TopNav/>
        <Header data={wallpaper}/>
        <HorizantalCards data={trending}/>
    </div>
    </>
  ) : <h1>Loading</h1>
}

export default Home
