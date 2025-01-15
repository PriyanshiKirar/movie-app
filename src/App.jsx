import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TvShows from './components/TvShows'
import People from './components/People'
import Moviedetails from './components/Moviedetails'
import TvDetals from './components/TvDetals'
import PersonDetails from './components/PersonDetails'
 
const App = () => {
  return (
    <div className='w-screen min-h-screen bg-[#1F1E24] flex'>
    <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/trending' element={<Trending/>} />
   <Route path='/popular' element={<Popular/>} />

   <Route path='/movie' element={<Movie/>} />
<Route path="/movie/details/:id" element={<Moviedetails/>}/>

   <Route path='/tv' element={<TvShows/>}/> 
   <Route path="/tv/details/:id" element={<TvDetals/>}/> 

   <Route path='/person' element={<People/>} />
   <Route path="/person/details/:id" element={<PersonDetails/>}/> 

    </Routes>
    </div>
  )
}

export default App

