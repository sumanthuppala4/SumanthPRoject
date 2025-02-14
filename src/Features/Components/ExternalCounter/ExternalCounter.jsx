import { useSyncExternalStore } from "react";
import { store, increment, toggleTheme } from "store/store";

function subscribe(callback) {
  return store.subscribe(callback);
}

function getSnapshot() {
  return store.getState().counter.value;
}

function getTheme() {
  return store.getState().theme.darkMode;
}

function ExternalCounter() {
  const count = useSyncExternalStore(subscribe, getSnapshot);
  const theme = useSyncExternalStore(subscribe, getTheme);

  function handleIncrement() {
    store.dispatch(increment());
  }

  function handleToggleTheme() {
    store.dispatch(toggleTheme());
  }
  console.log("External counter rerendered");

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Theme: {theme ? "Dark" : "Light"}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ExternalCounter;
