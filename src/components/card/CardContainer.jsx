import React, { useCallback, useState } from "react";
import Card from "./Card";
import Modal from "../modal/Modal";

import "./Card.css";

const CardContainer = ({ cards, setCards }) => {
  const [isModalOpen, setIsModalOpen] = useState("");

  const openModal = useCallback((id) => {
    setIsModalOpen(id);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen("");
  }, []);

  const deleteCard = useCallback(
    (number) => {
      const updatedCards = cards.filter((card) => card !== number);
      setCards(updatedCards);
    },
    [cards]
  );
  return (
    <div className="card-container">
      <Modal isOpen={!!isModalOpen} onClose={closeModal}>
        <>
          <h2>{isModalOpen}</h2>
          <h3>Are you sure </h3>
          <p>Do you really want to delete this item </p>

          <div className="modal-footer">
            <button onClick={closeModal}>Cancel</button>
            <button
              onClick={() => {
                deleteCard(+isModalOpen);
                closeModal();
              }}
            >
              Delete
            </button>
          </div>
        </>
      </Modal>
      {cards &&
        cards.map((number) => (
          <Card key={number} number={number} onDelete={openModal} />
        ))}
    </div>
  );
};

export default CardContainer;
