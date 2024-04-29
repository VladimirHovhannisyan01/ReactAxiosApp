import { createContext } from "react";

const PostsContext = createContext({
  onDeleteHandler: () => {},
  onEditHandler: () => {},
  posts: [],
  selectedPost: null,
  onUpdateHandler: () => {},
  userPostHandler: () => {},
  userPost: {
    title: "",
    body: "",
    id: NaN,
  },
});

export default PostsContext;
