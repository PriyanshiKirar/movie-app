import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { asyncloadmovie } from '../store/actions/movieActions';
import { removemovie } from '../store/reducres/movieSlice';
import Loading from './Loading';

const Moviedetails = () => {
  const navigate=useNavigate();
  const { id } = useParams(); // Extracting the movie ID from the route parameters
 const {info}= useSelector((state)=>state.movie)
 console.log(info)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id)); // Dispatching the action to load movie details
return ()=>{
  dispatch(removemovie());
}


  }, []); // Adding dependencies to ensure proper execution

  return info ? (
   <div 
    style={{
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), 
          url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}}
    className='w-screen h-screen px-[10%] '>
    <nav className='w- h-[10vh] items-center text-zinc-100 flex gap-10 text-xl'>
    <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2"></Link>
    <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-line"></i></a>
    <a target='_blank'  href=""><i className="ri-earth-fill"></i></a>
    <a target='_blank' href="">imdb</a>
    </nav>

  </div>
  ): <Loading/>
};

export default Moviedetails;
