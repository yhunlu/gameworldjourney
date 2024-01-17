import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platforms';
import Platform from '../entities/Platform';
import APIClient from '../services/api-client';
import {
  CACHE_KEY_PLATFORMS,
  CACHE_KEY_PLATFORMS_URL,
} from '../utils/constants';

const apiClient = new APIClient<Platform>(`/${CACHE_KEY_PLATFORMS_URL}`);

const usePlatforms = () =>
  useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
