import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Store } from '../entities';
import APIClient from '../services/api-client';
import { CACHE_KEY_STORES } from '../utils/constants';

const apiClient = new APIClient<Store>(`/${CACHE_KEY_STORES}`);

const useStores = () =>
  useQuery({
    queryKey: [CACHE_KEY_STORES],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });

export default useStores;
