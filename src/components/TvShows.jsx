import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import Dropdown from '../templates/Dropdown';
import TopNav from '../templates/TopNav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cadrs from '../templates/Cadrs';

const TvShows = () => {
    const navigate = useNavigate();
    const [categary, setcategary] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hashMore, sethashMore] = useState(true);

    document.title = "TvShows " + categary.toUpperCase();

    const GetTV = async () => {
        try {
            const { data } = await axios.get(`/tv/${categary}`, {
                params: { page }, // Passing page as a query param
            });
            if (data.results.length > 0) {
                settv((prevState) => [...prevState, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethashMore(false);
            }
        } catch (error) {
            console.log("Error fetching TV shows:", error);
        }
    };

    const RefreceHandler = () => {
        setpage(1);
        settv([]);
        sethashMore(true);
        GetTV();
    };

    useEffect(() => {
        RefreceHandler();
    }, [categary]);

    return tv.length ? (
        <div className='w-screen h-screen'>
            <div className='px-[5%] w-full flex items-center justify-between'>
                <h1 className='w-[20%] text-2xl text-zinc-400 font-semibold'>
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line ml-2"
                    ></i>
                    TV
                </h1>
                <div className='flex items-center w-[80%]'>
                    <TopNav />
                    <Dropdown
                        title="Categary"
                        options={["on_the_air", "popular", "top_rated", "airing_today"]}
                        func={(e) => setcategary(e.target.value)}
                    />
                </div>
            </div>
            <InfiniteScroll
                dataLength={tv.length}
                next={GetTV} // Corrected here
                hasMore={hashMore}
                loader={<h1>Loading.....</h1>}
            >
                <Cadrs data={tv} title={categary} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default TvShows;
