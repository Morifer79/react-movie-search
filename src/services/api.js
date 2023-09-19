import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c16c869f875a641f65f14ffc799280d5';

//const TOKEN =
//  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTZjODY5Zjg3NWE2NDFmNjVmMTRmZmM3OTkyODBkNSIsInN1YiI6IjY1MDM2NzA3ZWZlYTdhMDBmZDFjYzgxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BWX9F6WrGsQsNt4hLDRCgOg6i1oBc61A6s_j5oAs_LQ';
//const options = {
//  headers: {
//    Authorization: `Bearer ${TOKEN}`,
//  },
//};

export const fetchHomePage = async signal => {
  const { data } = await axios.get('trending/movie/day', {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data.results;
};

export const fetchSearchMovie = async (query, signal) => {
  const { data } = await axios.get('search/movie', {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      include_adult: false,
      page: 1,
    },
  });
  return data.results;
};

export const fetchSearchDetail = async (movieId, signal) => {
  const { data } = await axios.get(`movie/${movieId}`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};

export const fetchSearchCast = async (movieId, signal) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.cast;
};

export const fetchSearchReviews = async (movieId, signal) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return data.results;
};
