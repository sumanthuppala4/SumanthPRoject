import { useSelector, useDispatch } from "react-redux";
import { increment, toggleTheme } from "store/store";

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const toggleThemeValue = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  console.log("Counter re rendered"); // Debugging log

  return (
    <div>
      <h2>count: {counter}</h2>
      <h2>Theme: {toggleThemeValue?"Dark":"Light"}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
}

export default Counter;
