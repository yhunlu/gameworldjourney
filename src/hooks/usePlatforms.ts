import ms from 'ms';
import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import {
  CACHE_KEY_PLATFORMS,
  CACHE_KEY_PLATFORMS_URL,
} from '../utils/constants';
import APIClient from '../services/api-client';
import { Platform } from '../entities/Platform';

const apiClient = new APIClient<Platform>(`/${CACHE_KEY_PLATFORMS_URL}`);

const usePlatforms = () =>
  useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
