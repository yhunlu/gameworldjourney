import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { genres } from '../data';
import { Genre } from '../entities';
import APIClient from '../services/api-client';
import { CACHE_KEY_GENRES } from '../utils/constants';

const apiClient = new APIClient<Genre>(`/${CACHE_KEY_GENRES}`);
const useGenres = () =>
  useQuery({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
