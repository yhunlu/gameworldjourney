import { useStores } from '.';

const useStore = (id?: number) => {
  const { data: stores } = useStores();
  return stores?.results.find((t) => t.id === id);
};

export default useStore;
