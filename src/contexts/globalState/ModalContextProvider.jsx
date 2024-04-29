import React, { useCallback, useState } from "react";
import ModalContext from "./ModalContext";

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(NaN);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const userIdHandler = (id) => {
    setUserId(id);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        toggleModal,
        userId,
        userIdHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
