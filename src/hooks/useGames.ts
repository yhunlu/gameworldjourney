import { GameQuery } from '../App';
import { Platform } from './usePlatforms';
import { CACHE_KEY_GAMES } from '../utils/constants';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

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
  useQuery({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGames;
