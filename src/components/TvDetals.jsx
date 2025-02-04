
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadtv } from '../store/actions/tvActions';
import { removetv } from '../store/reducres/tvSlice';
import Loading from './Loading';
import { Fragment } from 'react';
import HorizantalCards from '../templates/HorizantalCards'
const TvDetals = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  console.log(info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), 
            url(https://image.tmdb.org/t/p/original/${info.detail?.backdrop_path || ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className=' relative w-screen h-[240vh] px-[10%]'
    >
      {/* Part 1: Navigation */}
      <nav className='w- h-[10vh] items-center text-zinc-100 flex gap-10 text-xl'>
        <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2"></Link>
        <a target='_blank' rel="noopener noreferrer" href={info.detail?.homepage || ''}>
          <i className="ri-external-link-line"></i>
        </a>
        <a target='_blank' rel="noopener noreferrer"
          href={`https://www.wikidata.org/wiki/${info.externalid?.wikidata?.id || ''}`}>
          <i className="ri-earth-fill"></i>
        </a>
        <a target='_blank' rel="noopener noreferrer" href="">
          imdb
        </a>
      </nav>

      {/* Part 2: Poster and Detail */}
      <div className='w-full flex'>
        <img
          className='shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[52vh] w-[40vh] object-cover'
          src={`https://image.tmdb.org/t/p/original/${info.detail?.backdrop_path ||
            info.detail?.poster_path}`} alt=""
        />

        <div className='content ml-[5%] text-white'>
          <h1 className='text-4xl font-black text-white'>
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name
              || info.detail.original_title
            }
            <small className='text-2xl font-bold text-zinc-300'
            >{info.detail.first_air_date.split("-")[0]}</small>
          </h1>

          <div className=' mt-3 mb-5 flex text-white items-center gap-x-3 '>

            <span className=' 
  text-white w-[6vh] text-xl font-semibold rounded-full h-[6vh] flex justify-center items-center bg-yellow-600'>
              {(info.detail.vote_average * 10).toFixed()}{""}
              <sup>%</sup>
            </span>
            <h1 className='font-semibold w-[60px] text-2xl leading-6'>User Score</h1>
            <h1 className=''>{info.detail.release_date}</h1>
            <h1 className=''>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min
            </h1>
          </div>
          <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>
          <h1 className='text-xl mt-5 mb-3 '>Overview</h1>
          <p >{info.detail.overview}</p>

          <h1 className='text-xl mt-5 mb-3 '>Movie Tranlated</h1>
          <p className='mb-2' >{info.translations.join(" ")}</p>
          <Link className=' py-2 px-3 rounded-lg bg-[#6556CD]' to={`${pathname}/trailer`}>
            <i className="text-xl mr-3 ri-play-fill"></i>
            Play Trailer</Link>
        </div>
      </div>

      {/* Part 3: Available on Platforms */}
      <div className='w-[80%] flex flex-col gap-y-5 mt-5'>
        {info.watchproviders?.flatrate && (
          <div className='flex gap-x-10 items-center text-white'>
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img key={i}
                title={w.provider_name}
                className='w-[5vh] h-[5vh] rounded-md'
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders?.buy && (
          <div className='flex gap-x-10 items-center text-white'>
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w) => (
              <img title={w.provider_name}
                className='w-[5vh] h-[5vh] rounded-md'
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders?.rent && (
          <div className='flex gap-x-10 items-center text-white'>
            <h1>Available for free</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img key={i}
                title={w.provider_name}
                className='w-[5vh] h-[5vh] rounded-md'
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}

          </div>
        )}
        {info.watchproviders?.free && (
          <div className='flex gap-x-10 items-center text-white'>
            <h1>Available for Rent</h1>
            {info.watchproviders.free.map((w, i) => (
              <img key={i}
                title={w.provider_name}
                className='w-[5vh] h-[5vh] rounded-md'
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}

          </div>
        )}

      </div>




      <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />

      {/* paer 4  seasions */}
      <h1 className='text-3xl mt-10  font-semibold text-white '>Seasons</h1>
      <div className='w-[100%] flex overflow-y-hidden mb-5 p-5 '>
        {info.detail.seasons.length>0? info.detail.seasons.map((s,i) => (
       
           
       <div className=' mr-10'>
            <img
              className=' shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[35vh] min-w-[14vw] object-cover'
              src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} alt="no" />
             
            <h1 className='text-xl text-zinc-300 mt-3 font-semibold'>
              {s.name
              }
              
            </h1>
            </div>
        )):<h1 className='text-3xl mt-5 text-white text-center font-black'>Nothing to show</h1>}

      </div>
      <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />

      {/* paer 5  Recommendation and similar */}
      <h1 className='text-3xl mt-10  font-semibold text-white '> Recommendations & Similar Stuff</h1>
      <HorizantalCards data=
        {info.recommendations.length > 0 ? info.recommendations : info.similar}
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};


export default TvDetals