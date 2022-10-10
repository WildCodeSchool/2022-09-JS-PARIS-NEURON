import { useState, useEffect } from "react";

export const Favorites = () => {
  const [marks, setmarks] = useState(() => {
    const ls = localStorage.getItem("bookmarks");
    if (ls) return JSON.parse(ls);
    return [];
  });

  const toggleItemInLocalStorage = (id) => () => {
    const ismarked = marks.includes(id);
    if (ismarked) setmarks((prev) => prev.filter((b) => b !== id));
    else setmarks((prev) => [...prev, id]);
  };

  useEffect(() => {
    localStorage.setItem("marks", JSON.stringify(marks));
  }, [marks]);

  return [marks, toggleItemInLocalStorage];
};
