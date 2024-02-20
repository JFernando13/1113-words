import styles from "./card-day.module.css";
import { getTranslation } from "~/i18n/utils";
import { SmileIcon } from "../icons/emojis/SmileIcon";
import { useFavoriteStore } from "~/hooks/useFavoriteStore";
import { clsx } from "clsx";

interface Props {
  currentLocale: string;
  data: {
    day: number;
    pubDate: string;
    title: string;
    tags: string[];
  };
  id: string;
}

export function CardDay({ data, currentLocale, id }: Props) {
  const t = getTranslation(currentLocale ?? "es");

  const { addFavorite, removeFavorite } = useFavoriteStore((state) => ({
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
  }));

  const favorites = useFavoriteStore((state) => state.favorites);

  const navigate = () => {
    const currentPath = window.location.pathname;
    // Construir la nueva URL con el idioma y el ID
    const url = `${window.location.origin}${currentPath}/days/${id}`;

    // Redirigir a la nueva URL
    window.location.replace(url);
  };

  return (
    <article
      className={`flex flex-col justify-between px-8 py-7 h-full max-w-[500px] rounded-lg bg-secondary-500 dark:bg-primary-600/30 gap-6 shadow-card-primary hover:scale-105 transition-transform duration-300group`}
      onClick={navigate}
    >
      <main className="flex flex-col gap-2">
        <header className="flex justify-between items-center">
          <p className={`${styles["day"]} flex items-center gap-2`}>
            <span className="text-secondary-300 dark:text-gray-300 text-sm">
              {t.BLOG.CARD.day} {data.day}
            </span>
            <span className="text-xs font-thin text-secondary-300 dark:text-gray-400">
              {data.pubDate}
            </span>
          </p>
          <button
            onClick={(event) => {
              event.stopPropagation();

              if (favorites.some((f) => f.day === data.day)) {
                return removeFavorite(data.day);
              }
              addFavorite(data);
            }}
          >
            <SmileIcon
              className={clsx(
                "w-6 h-6 text-secondary-300 dark:text-gray-400 hover:text-gray-200 transition-colors",
                favorites.some((f) => f.day === data.day) &&
                  "dark:text-yellow-500 dark:hover:text-yellow-400 text-yellow-400 hover:text-yellow-100",
              )}
            />
          </button>
        </header>
        <h2 className="text-2xl text-primary-200 font-bold">{data.title}</h2>
      </main>
      <section
        className={`flex gap-2 overflow-scroll ${styles["tag-container"]}`}
      >
        {data.tags.map((tag) => {
          return (
            <span
              className={
                "px-4 rounded-full py-1 bg-secondary-300 text-secondary-600 dark:bg-secondary-600 dark:text-secondary-300 text-xs capitalize transition-colors text-nowrap font-medium hover:bg-primary-400 dark:hover:bg-secondary-500"
              }
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </section>
    </article>
  );
}
