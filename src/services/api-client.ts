import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_API_KEY,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
