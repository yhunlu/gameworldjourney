import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchResponse } from '../services/api-client';
import { CACHE_KEY_GAMES } from '../utils/constants';
import { Platform } from './usePlatforms';

const apiClient = new APIClient<Game>(`/${CACHE_KEY_GAMES}`);

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      const { genre, platform, sortOrder, searchText } = gameQuery;
      const params = {
        genres: genre?.id || null,
        parent_platforms: platform?.id || null,
        ordering: sortOrder || null,
        search: searchText || null,
        page: pageParam || null,
      };

      return apiClient.getAll({ params });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
