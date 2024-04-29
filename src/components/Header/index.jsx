import { memo, useContext, useState } from "react";
import PostsContext from "../../contexts/globalState/PostsContext";

const Header = () => {
  const { userPost, userPostHandler } = useContext(PostsContext);
  const [userPostValue, setUserPostValue] = useState({
    title: "",
    body: "",
    id: NaN,
  });

  return (
    <header className="header-conteiner">
      <h1>Updated Data</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          userPostHandler(
            userPostValue.title,
            userPostValue.body,
            userPostValue.id
          );
        }}
      >
        <input
          type="text"
          placeholder="Title"
          defaultValue={userPost.title}
          onChange={(e) => {
            setUserPostValue({
              title: e.target.value,
              body: userPost.body,
              id: userPost.id,
            });
          }}
        />
        <input
          type="text"
          placeholder="Body"
          defaultValue={userPost.body}
          onChange={(e) => {
            setUserPostValue({
              title: userPost.title,
              body: e.target.value,
              id: userPost.id,
            });
          }}
        />
        <button>Update</button>
      </form>
    </header>
  );
};

export default Header;
