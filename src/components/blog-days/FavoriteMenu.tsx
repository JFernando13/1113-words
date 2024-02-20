import { useFavoriteStore } from "~/hooks/useFavoriteStore.ts";
import { CloseIcon } from "../icons/CloseIcon";
import { CardDay } from "./CardDay.tsx";
import type { TDay } from "~/types/day";

import styles from "./favorite-menu.module.css";

interface Props {
  closeMenu: () => void;
}

export function FavoriteMenu({ closeMenu }: Props) {
  const favorites: TDay[] = useFavoriteStore((state) => state.favorites);

  return (
    <aside
      className="fixed top-0 left-0 h-full overflow-scroll bg-[#0002] w-full z-10 backdrop-blur-2xl flex justify-end"
      onClick={closeMenu}
    >
      <main className="bg-primary-600 dark:bg-primary-700 xl:w-2/6 w-full p-8 flex flex-col gap-10 h-full overflow-scroll">
        <header className="flex gap-4 items-center">
          <button className={styles["favorite-btn"]} onClick={closeMenu}>
            <CloseIcon />
          </button>
          <h2 className="text-4xl font-bold">Favorite Days</h2>
        </header>

        <section className={styles["day-container"]}>
          {favorites.map((favorite) => (
            <CardDay
              key={`day-${favorite.day}`}
              id={`day-${favorite.day}`}
              data={favorite}
              currentLocale="es"
            />
          ))}
        </section>
      </main>
    </aside>
  );
}
