import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  tagId?: number;
  storeId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface UserQuery {
  sub?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setTagId: (tagId: number) => void;
  setStoreId: (storeId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

interface UserQueryStore {
  userQuery: UserQuery;
  setSub: (sub: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setTagId: (tagId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, tagId } })),
  setStoreId: (storeId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, storeId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

const useUserQueryStore = create<UserQueryStore>((set) => ({
  userQuery: {} as UserQuery,
  setSub: (sub) => set(() => ({ userQuery: { sub } })),
}));

export { useGameQueryStore, useUserQueryStore };
