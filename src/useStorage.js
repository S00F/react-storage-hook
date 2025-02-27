// src/useStorage.js
import { useState, useEffect } from "react";

const useStorage = (key, defaultValue, storageType = "local") => {
  const storage = storageType === "session" ? sessionStorage : localStorage;

  const [value, setValue] = useState(() => {
    try {
      const storedValue = storage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error("Error reading storage:", error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to storage:", error);
    }
  }, [key, value, storage]);

  return [value, setValue];
};

export default useStorage;