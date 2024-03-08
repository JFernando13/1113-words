/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TDay } from "~/types/day";

interface TFavoriteStore {
  favorites: TDay[];
  addFavorite: (newDay: TDay) => void;
  removeFavorite: (day: number) => void;
}

export const useFavoriteStore = create(
  persist<TFavoriteStore>(
    (set, get) => ({
      favorites: [],
      addFavorite: (newDay: TDay) => {
        set(() => {
          return {
            favorites: [...get().favorites, newDay],
          };
        });
      },
      removeFavorite: (day: number) => {
        set(() => ({
          favorites: get().favorites.filter(
            (favorite: TDay) => favorite.day !== day,
          ),
        }));
      },
    }),
    {
      name: "favorite-store",
    },
  ),
);
