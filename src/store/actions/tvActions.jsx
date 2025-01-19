

import { removetv} from '../reducres/tvSlice';
import axios from '../../utils/axios';
import { loadtv } from '../reducres/tvSlice';

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

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

    dispatch(loadtv(theultimatedetails));
    // console.log("Fetched Movie Details:", theultimatedetails);
  } catch (error) {
    console.error(`Error fetching data for movie ID: ${id}`, error);
  }
};
