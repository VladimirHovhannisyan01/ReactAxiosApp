import { useContext } from "react";
import PostsContext from "../../contexts/globalState/PostsContext";
import ReactDOM from "react-dom";
import ModalContext from "../../contexts/globalState/ModalContext";

const Modal = () => {
  const { onDeleteHandler } = useContext(PostsContext);
  const { isModalOpen, toggleModal } = useContext(ModalContext);
  if (!isModalOpen) return null;

  const onClose = () => {
    document.body.style.overflow = "auto";
    toggleModal();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to delete this post?</h3>
            <span className="modal-buttons">
              <button
                onClick={() => {
                  toggleModal();
                  onDeleteHandler();
                  document.body.style.overflow = "auto";
                }}
              >
                Confirm
              </button>
              <button className="close-button" onClick={onClose}>
                Cancel
              </button>
            </span>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <div className="backdrop"></div>,
        document.getElementById("backdrop-root")
      )}
      {(document.body.style.overflow = "hidden")}
    </>
  );
};

export default Modal;
