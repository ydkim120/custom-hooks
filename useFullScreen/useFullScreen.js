import { useRef } from "react";

export const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      const { current } = element;
      if (current.requestFullScreen) current.requestFullScreen();
      else if (current.mozRequestFullScreen) current.mozRequestFullScreen();
      else if (current.webkitRequestFullScreen)
        current.webkitRequestFullScreen();
      else if (current.msRequestFullScreen) current.msRequestFullScreen();

      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = (callback) => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitExitFullScreen) document.webkitExitFullScreen();
      else if (document.msExitFullScreen) document.msExitFullScreen();

      if (callback && typeof callback === "function") {
        callback(false);
      }
    }
  };

  return { element, triggerFull, exitFull };
};
