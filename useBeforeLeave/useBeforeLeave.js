import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  const handler = (event) => {
    const { clientY } = event;
    if (clientY) onBefore();
  };

  useEffect(() => {
    if (typeof onBefore !== "function") return;

    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, []);
};
