import { FavoriteIcon } from "../icons/FavoriteIcon";
import { useFavoriteStore } from "~/hooks/useFavoriteStore";
import { FavoriteMenu } from "./FavoriteMenu";
import { useState } from "react";

export function FavoriteBtn() {
  const [openFavorites, setOpenFavorites] = useState(false);

  const favorites = useFavoriteStore((state) => state.favorites);

  const openMenu = () => {
    window.document.body.style.overflowY = "hidden";
    setOpenFavorites(true);
  };

  const closeMenu = () => {
    window.document.body.style.overflowY = "visible";
    setOpenFavorites(false);
  };

  return (
    <>
      <button
        className="btn flex justify-center items-center rounded-full h-11 w-11 relative bg-primary-500 hover:bg-primary-400 dark:bg-primary-600 dark:hover:bg-primary-600/50"
        onClick={openMenu}
      >
        <FavoriteIcon />

        {favorites.length > 0 && (
          <span className="h-5 w-5 rounded-full text-primary-500 bg-primary-200 dark:bg-primary-500 dark:text-primary-200  text-xs absolute -bottom-2 -left-1 flex justify-center items-center font-bold">
            {favorites.length}
          </span>
        )}
      </button>
      {openFavorites && <FavoriteMenu closeMenu={closeMenu} />}
    </>
  );
}
