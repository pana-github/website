import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const { value, timestamp } = JSON.parse(item);
        const now = new Date().getTime();
        if (now - timestamp < 24 * 60 * 60 * 1000) {
          // 24 hours validity
          console.log(`Retrieved ${key}:`, value);
          return value;
        }
      }
      return initialValue;
    } catch (error) {
      console.log(`Error retrieving ${key}:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore = {
        value: storedValue,
        timestamp: new Date().getTime(),
      };
      console.log(`Setting ${key}:`, storedValue);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(`Error setting ${key}:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
