import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c16c869f875a641f65f14ffc799280d5';

export const fetchHomePage = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axios.get('search/movie', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      include_adult: false,
      page: 1,
    },
  });
  return response.data;
};

export const fetchSearchDetail = async movieId => {
  const response = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
};

export const fetchSearchCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.cast;
};

export const fetchSearchReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return data.results;
};
