import { useContext } from "react";
import PostsContext from "../../contexts/globalState/PostsContext";
import PostItem from "../PostItem";

const Data = () => {
  const { posts } = useContext(PostsContext);

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default Data;
