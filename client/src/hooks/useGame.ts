import { useQuery } from '@tanstack/react-query';
import { Game } from '../entities';
import APIClient from '../services/api-client';
import { CACHE_KEY_GAMES } from '../utils/constants';

const apiClient = new APIClient<Game>(`/${CACHE_KEY_GAMES}`);

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;