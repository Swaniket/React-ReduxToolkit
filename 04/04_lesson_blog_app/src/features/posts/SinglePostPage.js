import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

function SinglePostPage() {
  const postId = useParams();

  console.log(postId)

  const post = useSelector((state) => selectPostById(state, Number(postId.postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>{" "}
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post}/>
      </p>
    </article>
  );
}

export default SinglePostPage;
