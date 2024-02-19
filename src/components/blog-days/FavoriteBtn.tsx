import { FavoriteIcon } from "../icons/FavoriteIcon";
import { useFavoriteStore } from "~/hooks/useFavoriteStore";
import { FavoriteMenu } from "./FavoriteMenu";
import { useState } from "react";

export function FavoriteBtn() {
  const [openFavorites, setOpenFavorites] = useState(false);

  const favorites = useFavoriteStore((state) => state.favorites);

  const closeMenu = () => {
    setOpenFavorites(false);
  };

  return (
    <>
      <button
        className="btn flex justify-center items-center rounded-full h-11 w-11 relative"
        onClick={() => setOpenFavorites(true)}
      >
        <FavoriteIcon />

        {favorites.length > 0 && (
          <span className="h-5 w-5 rounded-full bg-primary-500 text-primary-200 text-xs absolute -bottom-2 -left-1 flex justify-center items-center font-bold">
            {favorites.length}
          </span>
        )}
      </button>
      {openFavorites && <FavoriteMenu closeMenu={closeMenu} />}
    </>
  );
}
