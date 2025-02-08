import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadperson } from '../store/actions/perserAction';
import { removeperson } from '../store/reducres/personSlice';
import Loading from './Loading';
import HorizantalCards from '../templates/HorizantalCards'
import Trailer from '../templates/Trailer';
const Persondetails = () => {
  const  {pathname}=useLocation()
  const navigate = useNavigate();
  const { id } = useParams(); // Extracting the person ID from the route parameters
  const { info } = useSelector((state) => state.person);
  console.log(info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadperson(id)); // Dispatching the action to load person details
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info? 
    <div className='px-[15%] w-screen '>
      {/* Part 1: Navigation */}
            <nav className='w-full h-[10vh] items-center text-zinc-100 flex gap-10 text-xl'>
              <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2">
              </Link>
             
            </nav>
<div className='w-full flex flex-col'>
   {/* Part 2: Poster and Detail */}
   <div className='w-[20%]'>
   <img
          className='shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[42vh] w-[40vh] object-cover'
          src={`https://image.tmdb.org/t/p/original/${info.detail?.backdrop_path ||
            info.detail?.profile_path}`} alt=""
        />
         <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
        
          <div className='text-2xl text-white flex gap-x-5'>

              <a target='_blank' rel="noopener noreferrer"
                href={`https://www.wikidata.org/wiki/${info.externalid?.wikidata?.id || ''}`}>
                <i className="ri-earth-fill"></i>
              </a>
              <a target='_blank' rel="noopener noreferrer"
                href={`https://www.facebook.com/${info.externalid?.facebook?.id || ''}`}>
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a target='_blank' rel="noopener noreferrer"
                href={`https://www.instagram.com/${info.externalid?.instagram?.id || ''}`}>
       <i className="ri-instagram-fill"></i>
              </a>
          </div>
             
   </div>
{/* part 3 right Details and information */}
<div className=''></div>



</div>




    </div> :<Loading/>
  
}

export default Persondetails 