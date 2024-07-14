/* eslint-disable react/jsx-no-comment-textnodes */
type ArticleProps = {
  post: PostType;
};
import Comment from "../Comment/Comment";
import PostToolbar from "../Post/Toolbar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import styles from "./styles.module.css";

export default function Article(props: ArticleProps) {
  const { post } = props;
  return (
    <article className={styles.container}>
      <div className={styles.context}>
        <button>
          <b>//:circle</b>
        </button>
        <button>{post.author_id}</button>
      </div>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.content}>{post.content}</div>
      <div className={styles.toolbar}>
        <PostToolbar post={post} />
      </div>
      <CommentSection />
      <Comments post={post} />
    </article>
  );
}
export function CommentSection() {
  return (
    <div className={styles["comment-input"]}>
      <Textarea />
      <Button>Send</Button>
    </div>
  );
}

type CommentsSectionProps = {
  post: PostType;
};
export function Comments(props: CommentsSectionProps) {
  const { post } = props;
  const { comments } = post;

  const CommentsJSX = comments.map((comment, i) => {
    return <Comment key={comment.id + "_i"} comment={comment} />;
  });
  console.log(CommentsJSX);
  return <div className={styles.comments_section}>{CommentsJSX}</div>;
}
