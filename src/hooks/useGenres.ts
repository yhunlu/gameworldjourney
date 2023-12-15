import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { CACHE_KEY_GENRES } from '../utils/constants';
import { FetchResponse } from './useData';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>(`/${CACHE_KEY_GENRES}`)
        .then((res) => res.data.results),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: genres,
  });

export default useGenres;
