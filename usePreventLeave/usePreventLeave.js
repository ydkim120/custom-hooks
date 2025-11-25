export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  // window가 닫히기 전에 function 실행
  const enablePrevent = () => window.addEventListener("beforeunload", listener);

  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};
