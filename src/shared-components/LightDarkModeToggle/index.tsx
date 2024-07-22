"use client";

import { useCallback } from "react";
import { PiMoonStarsFill as Moon } from "react-icons/pi";
import { PiSunFill as Sun } from "react-icons/pi";
import { useMediaQuery, useLocalStorage } from "usehooks-ts";

import styles from "./index.module.scss";

function useDarkMode(): [boolean, (value: boolean) => void] {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [override, setOverride] = useLocalStorage<string | undefined>(
        "DARK_MODE",
        undefined,
    );

    const setDarkMode = function (value: boolean) {
        document.body.classList.remove("force-dark-mode", "force-light-mode");
        document.body.classList.add(
            value ? "force-dark-mode" : "force-light-mode",
        );
        setOverride(value ? "yes" : "no");
    };

    if (override !== undefined) {
        return [override === "yes", setDarkMode];
    } else {
        return [prefersDarkMode, setDarkMode];
    }
}

export default function LightDarkModeToggle() {
    const [isDarkMode, setDarkMode] = useDarkMode();

    return (
        <button
            className={`${styles.container} ${isDarkMode ? styles.darkMode : styles.lightMode}`}
            onClick={() => setDarkMode(!isDarkMode)}
        >
            <Sun className={styles.sunIcon} title="Activate Light Mode" />
            <Moon className={styles.moonIcon} title="Activate Dark Mode" />
        </button>
    );
}
