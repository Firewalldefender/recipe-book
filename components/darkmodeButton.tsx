"use client";

import useDarkmode from "../utils/darkmode";
import darkmodeButtonClasses from "../UI/darkmodeButtonClasses";

export default function DarkmodeButton() {
  const { isDarkmode, toggleDarkmode } = useDarkmode();
  const label = isDarkmode ? "Lightmode aktivieren" : "Darkmode aktivieren";

  return (
    <button
      type="button"
      onClick={toggleDarkmode}
      aria-label={label}
      aria-pressed={isDarkmode}
      title={label}
      className={darkmodeButtonClasses}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        {isDarkmode ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        ) : (
          <path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z" />
        )}
      </svg>
    </button>
  );
}
