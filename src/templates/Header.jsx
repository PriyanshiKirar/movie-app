import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
    // console.log(data);

    return (
        <div
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), 
                      url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full h-[50vh] flex flex-col justify-end p-[5%] items-start"
        >
            <h1 className='text-4xl font-black text-white w-[70%]'>
                {data.title ||
                    data.name ||
                    data.original_name
                    || data.original_title
                }
            </h1>
            <p className='w-[70%] text-white text-xl mt-3 mb-3'>
                {data.overview.slice(0, 100)}...
                <Link to={`/${data.media_type}/details/${data.id}`}  className='text-blue-400'>more</Link>
                </p>
            <p className='text-white '>
                <i className="text-yellow-400 ri-megaphone-fill"></i>{""}
                {data.release_date || "No Information"}
                <i className=" ml-5 text-yellow-400 ri-album-fill"></i>{""}
                    {data.media_type.toUpperCase()}
            </p>
            <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='p-4 rounded text-white font-semibold mt-5  bg-[#6556CD]'>
            Watch Trailer</Link>
        </div>
    );
};

export default Header;

