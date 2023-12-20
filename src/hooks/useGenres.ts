import ms from 'ms';
import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GENRES } from '../utils/constants';
import genres from '../data/genres';
import APIClient from '../services/api-client';


const apiClient = new APIClient<Genre>(`/${CACHE_KEY_GENRES}`);
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
