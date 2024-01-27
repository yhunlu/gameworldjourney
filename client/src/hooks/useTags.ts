import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { tags } from '../data';
import { Tag } from '../entities';
import APIClient from '../services/api-client';
import { CACHE_KEY_TAGS } from '../utils/constants';

const apiClient = new APIClient<Tag>(`/${CACHE_KEY_TAGS}`);

const useTags = () =>
  useQuery({
    queryKey: [CACHE_KEY_TAGS],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: tags,
  });

export default useTags;
