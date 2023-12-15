import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import {
  CACHE_KEY_PLATFORMS,
  CACHE_KEY_PLATFORMS_URL,
} from '../utils/constants';
import apiClient, { FetchResponse } from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>(`/${CACHE_KEY_PLATFORMS_URL}`)
        .then((res) => res.data.results),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms,
  });

export default usePlatforms;
