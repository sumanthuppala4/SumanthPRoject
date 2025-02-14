import { useSyncExternalStore } from "react";
import { useState, useEffect } from "react";

// Subscribes to network status changes
function subscribeNetwork(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function subscribeResize(callback) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getWindowSnapshot() {
  return `${window.innerWidth}x${window.innerHeight}`;
}

export default function StatusTracker() {
  const isOnline = useSyncExternalStore(subscribeNetwork, () => {
    return navigator.onLine;
  });
  /* const windowSize = useSyncExternalStore(subscribeResize, getWindowSnapshot); */

   const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
console.log("component rendered")
  return (
    <div>
      <h3>Network Status: {isOnline ? "Online ✅" : "Offline ❌"}</h3>
      {/* <p>Window Size (useSyncExternalStore): {windowSize}</p> */}
      <p>
        Window Size (useState + useEffect): {size.width} x {size.height} 
        <br/>
        {navigator.onLine ? "Online" : "Offline"}
      </p>
    </div>
  );
}
