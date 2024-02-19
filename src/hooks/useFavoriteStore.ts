/* eslint-disable no-unused-vars */
import { create } from "zustand";
import type { TDay } from "~/types/day";

type State = {
  favorites: TDay[];
};

type Action = {
  addFavorite: (newDay: TDay) => void;
  removeFavorite: (day: number) => void;
};

export const useFavoriteStore = create<State & Action>((set, get) => ({
  favorites: [],
  addFavorite: (newDay: TDay) => {
    console.log(newDay);

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
}));
