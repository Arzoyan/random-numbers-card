import React, { useCallback } from "react";
import useRandomNumber from "../../hooks/useGenerateRandomNumber";

function Header({ setCards, cards }) {
  const [randomNumber, generateRandomNumber] = useRandomNumber();

  const addCard = useCallback(() => {
    generateRandomNumber();

    // unique numbers
    if (!cards.includes(randomNumber)) {
      setCards([...cards, randomNumber]);
      return;
    }
  }, [randomNumber]);

  const sortCards = () => {
    const sortedCards = [...cards].sort((a, b) => a - b);
    setCards(sortedCards);
  };

  return (
    <header className="header">
      <div>
        <button data-testid="add-card" onClick={addCard}>Add Card</button>
        <button data-testid="sort-cards" onClick={sortCards}>Sort Cards</button>
      </div>
    </header>
  );
}

export default Header;
