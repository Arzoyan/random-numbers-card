import { useState, useCallback } from "react";

const useRandomNumber = (min, max) => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 1000)
  );

  const generateRandomNumber = useCallback(() => {
    const newRandomNumber = Math.floor(Math.random() * 1000); // Change the range as needed
    setRandomNumber(newRandomNumber);
    setRandomNumber(newRandomNumber);
  }, [max, min]);

  return [randomNumber, generateRandomNumber];
};

export default useRandomNumber;
