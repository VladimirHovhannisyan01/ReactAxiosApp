import { createContext } from "react";

const ModalContext = createContext({
  toggleModal: () => {},
  isModalOpen: false,
  userId: null,
  userIdHandler: () => {},
});

export default ModalContext;
