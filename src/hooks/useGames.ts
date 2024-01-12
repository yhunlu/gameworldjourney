import ms from 'ms';
import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import { CACHE_KEY_GAMES } from '../utils/constants';
import { Platform } from './usePlatforms';
import useGameQueryStore from '../store';

const apiClient = new APIClient<Game>(`/${CACHE_KEY_GAMES}`);

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  released: string;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      const { genreId, platformId, sortOrder, searchText } = gameQuery;
      const params = {
        genres: genreId,
        parent_platforms: platformId,
        ordering: sortOrder,
        search: searchText,
        page: pageParam,
      };

      return apiClient.getAll({ params });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms('24h'),
  });
};

export default useGames;
