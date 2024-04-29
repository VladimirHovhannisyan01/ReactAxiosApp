import { useCallback, useContext, useEffect, useState } from "react";
import PostsContext from "./PostsContext";
import axios from "axios";
import ModalContext from "./ModalContext";

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { userId } = useContext(ModalContext);
  const [userPost, SetUserPost] = useState({
    title: "",
    body: "",
    id: NaN,
  });

  useEffect(() => {
    (async () =>
      axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
        setPosts([...res.data])
      ))();
  }, []);

  const onDeleteHandler = useCallback(() => {
    setPosts((prev) => prev.filter((el) => el.id !== userId));
  }, [userId]);

  const userPostHandler = useCallback((title, body, id) => {
    SetUserPost({ title, body, id });
  }, []);

  return (
    <PostsContext.Provider
      value={{
        onDeleteHandler,
        posts,
        userPostHandler,
        userPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
