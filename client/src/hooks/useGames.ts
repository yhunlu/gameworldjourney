import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game } from '../entities';
import APIClient, { FetchResponse } from '../services/api-client';
import { useGameQueryStore } from '../store';
import { CACHE_KEY_GAMES } from '../utils/constants';

const apiClient = new APIClient<Game>(`/${CACHE_KEY_GAMES}`);

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      const { genreId, platformId, tagId, storeId, sortOrder, searchText } =
        gameQuery;
      const params = {
        genres: genreId,
        parent_platforms: platformId,
        tags: tagId,
        stores: storeId,
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
