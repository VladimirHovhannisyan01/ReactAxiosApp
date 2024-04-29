import { useContext } from "react";
import ModalContext from "../../contexts/globalState/ModalContext";
import PostsContext from "../../contexts/globalState/PostsContext";

const Buttons = ({ post }) => {
  const { userIdHandler, toggleModal } = useContext(ModalContext);
  const { userPostHandler } = useContext(PostsContext);

  return (
    <div className="buttons">
      <button
        className="edit button"
        onClick={() => {
          userPostHandler(post.title, post.body, post.id);
        }}
      >
        Edit
      </button>
      <button
        className="delete button"
        onClick={() => {
          toggleModal();
          userIdHandler(post.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
