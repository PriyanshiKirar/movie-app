// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { asyncloadmovie } from '../store/actions/movieActions';
// import { removemovie } from '../store/reducres/movieSlice';
// import Loading from './Loading';

// const Moviedetails = () => {
//   const navigate=useNavigate();
//   const { id } = useParams(); // Extracting the movie ID from the route parameters
//  const {info}= useSelector((state)=>state.movie)
//  console.log(info)
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(asyncloadmovie(id)); // Dispatching the action to load movie details
// return ()=>{
//   dispatch(removemovie());
// }


//   }, []); // Adding dependencies to ensure proper execution

//   return info ? (
//    <div 
//     style={{
//     background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), 
//           url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
// }}
//     className='w-screen h-screen px-[10%] '>
//     <nav className='w- h-[10vh] items-center text-zinc-100 flex gap-10 text-xl'>
//     <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2"></Link>
//     <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-line"></i></a>
//     <a target='_blank'  href=""><i className="ri-earth-fill"></i></a>
//     <a target='_blank' href="">imdb</a>
//     </nav>

//   </div>
//   ): <Loading/>
// };

// export default Moviedetails;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { asyncloadmovie } from '../store/actions/movieActions';
// import { removemovie } from '../store/reducres/movieSlice';
// import Loading from './Loading';

// const Moviedetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Extracting the movie ID from the route parameters
//   const { info } = useSelector((state) => state.movie);
//   console.log(info);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(asyncloadmovie(id)); // Dispatching the action to load movie details
//     return () => {
//       dispatch(removemovie());
//     };
//   }, []); // Adding dependencies to ensure proper execution

//   return info ? (
//     <div
//       style={{
//         background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), 
//           url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || ''})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//       className='w-screen h-screen px-[10%]'
//     >
//      \
//       {/* {part 1 navigation} */}
//       <nav className='w- h-[10vh] items-center text-zinc-100 flex gap-10 text-xl'>
//         <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line ml-2"></Link>
//         <a target='_blank' rel="noopener noreferrer" href={info.detail?.homepage || ''}>
//           <i className="ri-external-link-line"></i>
//         </a>
//         <a target='_blank' rel="noopener noreferrer" href={`https://www.wikidata.org/wiki/${info.externalid?.wikidata?.id || ''}`}>
//           <i className="ri-earth-fill"></i>
//         </a>
//         <a target='_blank' rel="noopener noreferrer" href="">
//           imdb
//         </a>
//       </nav>
//       {/* {part 2 poster and detail} */}
//       <div className='w-full flex'>
//         <div>
//         <img
//           className=' shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[40vh] object-cover'
//           src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path
//             || info.detail.poster_path}`} alt=""
//         />

//         <div >
//           {info.watchproviders && info.watchproviders.flatrate &&
//             info.watchproviders.flatrate.map((w) => (
//               <img className='z-[9999] w-[40vh] h-[30vh] '
//                 src={`https://image.tmdb.org/t/p/original/${w.logo_path

//                   }`}
//                 alt=""
//               />
//             ))}

//         </div>
//       </div>
//       </div>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Moviedetails;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { asyncloadmovie } from '../store/actions/movieActions';
import { removemovie } from '../store/reducres/movieSlice';
import Loading from './Loading';

const Moviedetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Extracting the movie ID from the route parameters
  const { info } = useSelector((state) => state.movie);
  console.log(info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id)); // Dispatching the action to load movie details
    return () => {
      dispatch(removemovie());
    };
  }, []); // Adding dependencies to ensure proper execution

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), 
          url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className='w-screen h-screen px-[10%]'
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
          className='shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[40vh] object-cover'
          src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path ||
            info.detail.poster_path}`} alt=""
        />

      </div>
      {/* Part 3: available on plateform */}
      <div className='w-[80%] flex flex-col gap-y-5 mt-10  ' >

        {/* Safe access for `watchproviders.flatrate` */}


        {info.watchproviders && info.watchproviders.flatrate && (
          <div className='flex gap-x-10 items-center text-white'>
            <h1>Available on Platefroms</h1>
            {info.watchproviders.flatrate.map((w) => (
              <img  title={w.provider_name}
               className=' w-[5vh] h-[5vh]  rounded-md'
                src={`https://image.tmdb.org/t/p/original/${w.logo_path

                  }`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className='flex gap-x-10 items-center text-white'>
            <h1>Available on Platefroms</h1>
            {info.watchproviders.buy.map((w) => (
              <img  title={w.provider_name}
               className=' w-[5vh] h-[5vh]  rounded-md'
                src={`https://image.tmdb.org/t/p/original/${w.logo_path

                  }`}
                alt=""
              />
            ))}
          </div>
        )}
{info.watchproviders && info.watchproviders.rent && (
          <div className='flex gap-x-10 items-center text-white'>
            <h1>Available on rent</h1>
            {info.watchproviders.rent.map((w) => (
              <img  title={w.provider_name}
              className=' w-[5vh] h-[5vh]  rounded-md'
                src={`https://image.tmdb.org/t/p/original/${w.logo_path

                  }`}
                alt=""
              />
            ))}   
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
