import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") return;

    // componentDidMount 시 호출 (dependency: [])
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // componentWillUnMount 시 호출 => 클린업 함수
    return () => {
      if (element.current) {
        element.current.removeEventListener("click");
      }
    };
  }, []);
  return typeof onClick !== "function" ? undefined : element;
};
function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
