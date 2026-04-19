import { useEffect } from "react";

export const usePolling = (callback, interval = 5000) => {
  useEffect(() => {
    const id = setInterval(callback, interval);
    return () => clearInterval(id);
  }, [callback, interval]);
};