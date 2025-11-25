import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onHover !== "function") return;

    // componentDidMount 시 호출 (dependency: [])
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }

    // componentWillUnMount 시 호출 => 클린업 함수
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter");
      }
    };
  }, []);
  return typeof onHover !== "function" ? undefined : element;
};
