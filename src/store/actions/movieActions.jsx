// import { removemovie } from '../reducres/movieSlice';
// import axios from '../../utils/axios';
// import { loadmovie } from '../reducres/movieSlice';

// export const asyncloadmovie = (id) => async (dispatch, getState) => {
//   try {
//     const detail = await axios.get(`/movie/${id}`);
//     const externalid = await axios.get(`/movie/${id}/external_ids`);
//     const recommendations = await axios.get(`/movie/${id}/recommendations`);
//     const similar = await axios.get(`/movie/${id}/similar`);
//     const videos = await axios.get(`/movie/${id}/videos`);
//     const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    
//     let theultimatedetails = {
//       detail: detail.data,
//       externalid: externalid.data,
//       recommendations: recommendations.data.results,
//       similar: similar.data.results,
//       videos: videos.data.results.find((m) =>m.type === "Trailer"),
//       watchproviders: watchproviders.data.results.IN,
//     };
// dispatch(loadmovie(theultimatedetails))
//     // console.log(theultimatedetails); // Logging the fetched data
//   } catch (error) {
//     console.log("Error", error); // Logging any errors that occur
//   }
// };

import { removemovie } from '../reducres/movieSlice';
import axios from '../../utils/axios';
import { loadmovie } from '../reducres/movieSlice';

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

    // console.log("Available Regions for Watch Providers:", Object.keys(watchproviders.data.results));
    // console.log("IN Region Watch Providers:", watchproviders.data.results.IN);

    const watchProvidersData =
      watchproviders.data.results.IN ||
      Object.values(watchproviders.data.results)[0] || 
      null;

    const trailer = videos.data.results.find((m) => m.type === "Trailer") || null;

    const theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations:translations.data.translations.map((t)=>t.english_name),
      videos: trailer,
      watchproviders: watchProvidersData,
    };

    dispatch(loadmovie(theultimatedetails));
    // console.log("Fetched Movie Details:", theultimatedetails);
  } catch (error) {
    console.error(`Error fetching data for movie ID: ${id}`, error);
  }
};
