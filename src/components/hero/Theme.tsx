import { useEffect } from "react";
import { DarkIcon } from "../icons/theme/DarkIcon";
import { LightIcon } from "../icons/theme/LightIcon";

import { useState } from "react";

import styles from "./theme.module.css";

export function Theme() {
  const [theme, setTheme] = useState(() => {
    const getTheme = localStorage.getItem("color-theme") ?? "dark";
    document.documentElement.classList.add(getTheme);
    return getTheme;
  });

  function toggleTheme() {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setTheme("dark");
    }
  }

  return (
    <button
      className={`btn flex justify-center items-center rounded-full ${styles.theme}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}
