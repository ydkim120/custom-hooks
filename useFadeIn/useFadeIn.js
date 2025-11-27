import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef(null);

  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") return;

    setTimeout(() => {
      if (element.current) {
        const { current } = element;
        current.style.opacity = "1";
        current.style.transition = `opacity ${duration}s ease-in-out`;
      }
    }, delay);
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
