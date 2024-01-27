import { useTags } from '.';

const useTag = (id?: number) => {
  const { data: tags } = useTags();
  return tags?.results.find((t) => t.id === id);
};

export default useTag;
