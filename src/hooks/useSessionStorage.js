import { useState, useEffect } from "react";

function useSessionStorage(key, initialValue) {
  // Initialize state with the session storage value if it exists, or the initial value
  const [cards, setCards] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // Listen for changes to the value and update session storage
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(cards));
  }, [key, cards]);

  return [cards, setCards];
}

export default useSessionStorage;
