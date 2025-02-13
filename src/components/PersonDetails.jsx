import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadperson } from '../store/actions/perserAction';
import { removeperson } from '../store/reducres/personSlice';
import Loading from './Loading';
import HorizantalCards from '../templates/HorizantalCards'
import Dropdown from '../templates/Dropdown'
import Trailer from '../templates/Trailer';
const Persondetails = () => {
  const [category, setCategory] = useState("movie")
  const { pathname } = useLocation()
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
  return info ?
    <div className='px-[10%] w-screen bg-[#1F1E24] mb-6'>
      {/* Part 1: Navigation */}
      <nav className='w-full h-[10vh] items-center text-zinc-100 flex gap-10 text-xl'>
        <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2">
        </Link>

      </nav>
      <div className='w-full flex '>
        {/* Part 2: Poster and Detail */}
        <div className='w-[20%]'>
          <img
            className='shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[37vh] w-[40vh] object-cover'
            src={`https://image.tmdb.org/t/p/original/${info.detail?.backdrop_path ||
              info.detail?.profile_path}`} alt=""
          />
          <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
          {/* social media Likns */}
          <div className='text-2xl text-white flex gap-x-5'>

            <a target='_blank' rel="noopener noreferrer"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id || ''}`}>
              <i className="ri-earth-fill"></i>
            </a>
            <a target='_blank' rel="noopener noreferrer"
              href={`https://www.facebook.com/${info.externalid.facebook_id || ''}`}>
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a target='_blank' rel="noopener noreferrer"
              href={`https://www.instagram.com/${info.externalid.instagram_id || ''}`}>
              <i className="ri-instagram-fill"></i>

            </a>
            <a target='_blank' rel="noopener noreferrer"
              href={`https://www.twitter.com/${info.externalid.twitter_id || ''}`}>
              <i className="ri-twitter-x-fill"></i>

            </a>
          </div>
          {/* personal informtion */}
          <h1 className='text-2xl text-zinc-400 font-semibold my-5'>Personal Info</h1>
          <h1 className='text-lg text-zinc-400 font-semibold '>Known for</h1>

          <h1 className=' text-zinc-400 '>{info.detail.known_for_department}

          </h1>
          <h1 className='text-lg text-zinc-400 font-semibold  mt-3'>Known for</h1>

          <h1 className=' text-zinc-400 font-semibold '>{info.detail.known_for_department}

          </h1>
          <h1 className='text-lg text-zinc-400 font-semibold  mt-3'>Birthday</h1>

          <h1 className=' text-zinc-400 font-semibold '>{info.detail.
            birthday

          }

          </h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>Deathday</h1>

          <h1 className=' text-zinc-400 font-semibold '>{info.detail.
            deathday ? info.detail.deathday : "stil Alive"

          }

          </h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>Place of Birth</h1>

          <h1 className=' text-zinc-400 font-semibold '>{info.detail.place_of_birth
          }

          </h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>Also known as</h1>

          <h1 className=' text-zinc-400 font-semibold '>{info.detail.also_known_as.join(", ")}

          </h1>
        </div>


        {/* part 3 right Details and information */}
        <div className='w-[80%] ml-[5%]'>
          <h1 className='text-6xl text-zinc-400 font-black my-5'>{info.detail.name}</h1>
          <h1 className='text-xl text-zinc-400 font-semibold '>Biography</h1>
          <p className='text-zinc-400 mt-3'>{info.detail.biography}</p>

          <h1 className='text-lg text-zinc-400 font-semibold  mt-5'>Work Summry</h1>
          <HorizantalCards data={info.combinedCredits.cast} />

          <div className='w-full  flex justify-between'>

            <h1 className='text-xl text-zinc-400 font-semibold  mt-5'>Acting</h1>
            <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setCategory(e.target.value)} />
          </div>

          <div className='text-zinc-400 list-disc w-full h-[50vh] overflow-x-hidden overflow-y-auto border-2
           border-zinc-700 shadow-[rgba(255,255,255,.3)] shadow-lg mt-5'>

            {info[category + "Credits"].cast.map((c, i) =>
              <li key={i} className='hover:text-white duration-300 cursor-pointer p-5'>

                <Link to={`/${category}/details/${c.id}`}>
                  <span className='' >
                    {c.title ||
                      c.name ||
                      c.original_name
                      || c.original_title
                    }
                  </span >
                  <span  className='block ml-5 mt-3'>
                    {c.character && `  character Name:

                    ${c.character}`}
                  </span >
                </Link>
              </li>
            )}

          </div>

        </div>



      </div>




    </div> : <Loading />

}

export default Persondetails 