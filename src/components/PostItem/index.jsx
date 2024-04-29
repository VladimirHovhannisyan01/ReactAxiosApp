import { useContext } from "react";
import Buttons from "../Buttons";
import PostsContext from "../../contexts/globalState/PostsContext";

const PostItem = ({ post }) => {
  const { userPost } = useContext(PostsContext);

  return (
    <li className="post-conteiner">
      <div className="title-body-component">
        <h2>Title</h2>
        <p className="title-text">
          {userPost.id === post.id ? userPost.title : post.title}
        </p>
        <h2>Body</h2>
        <p>{userPost.id === post.id ? userPost.body : post.body}</p>
      </div>
      <div>
        <Buttons post={post} />
      </div>
    </li>
  );
};

export default PostItem;
