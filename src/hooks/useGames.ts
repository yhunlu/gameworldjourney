import { GameQuery } from '../App';
import { Platform } from './usePlatforms';
import { CACHE_KEY_GAMES } from '../utils/constants';
import apiClient, { FetchResponse } from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>(`/${CACHE_KEY_GAMES}`, {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data.results),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGames;
