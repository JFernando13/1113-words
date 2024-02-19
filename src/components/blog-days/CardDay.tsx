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
    const url = `${currentLocale === "es" ? "" : "en"}/days/${id}`;

    window.location.href = url;
  };

  return (
    <article className={`${styles["day-card"]} group`} onClick={navigate}>
      <main className="flex flex-col gap-2">
        <header className="flex justify-between items-center">
          <p className={`${styles["day"]} flex items-center gap-2`}>
            <span className="text-gray-300 text-sm">
              {t.BLOG.CARD.day} {data.day}
            </span>
            <span className="text-xs font-thin text-gray-400">
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
                "w-6 h-6 text-gray-400 hover:text-gray-200 transition-colors",
                favorites.some((f) => f.day === data.day) &&
                  "text-yellow-500 hover:text-yellow-400",
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
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          );
        })}
      </section>
    </article>
  );
}
