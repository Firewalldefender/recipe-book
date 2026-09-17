"use client";

import { useEffect, useState } from "react";

export default function useDarkmode() {
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkmode);
  }, [isDarkmode]);

  const toggleDarkmode = () => setIsDarkmode((current) => !current);

  return { isDarkmode, toggleDarkmode };
}
