import { useEffect, useMemo, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const STORAGE_KEY = "theme";

const Theme = () => {
  const preferredTheme = useMemo(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";
  }, []);

  const [theme, setTheme] = useState(preferredTheme);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2"> 

      <button
        type="button"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        className={[
          "btn btn-sm h-9 min-h-9 px-3",
          "bg-base-100/30 border border-base-100/30",
          "hover:bg-base-100/40 hover:border-base-100/40",
          "backdrop-blur",
        ].join(" ")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <span
          className={[
            "inline-flex items-center gap-2",
            theme === "dark" ? "text-[#ffbe0e]" : "text-base-content",
          ].join(" ")}
        >
          {theme === "dark" ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
          <span className="text-xs font-semibold">{theme === "dark" ? "Dark" : "Light"}</span>
        </span>
      </button>
    </div>
  );
};

export default Theme;