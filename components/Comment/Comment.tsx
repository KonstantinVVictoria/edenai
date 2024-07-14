type CommentProps = {
  comment: CommentType;
  nest_level?: number;
};
// const comment: CommentType = {
//   id: "test",
//   author_id: "test",
//   circle_id: "gaming",
//   date_created: "test",
//   upvotes: 3,
//   downvotes: 3,
//   content: "hello there",
//   comments: [],
// };
import PostToolbar from "../Post/Toolbar";
import styles from "./styles.module.css";
export default function Comment(props: CommentProps) {
  const { comment } = props;
  let nest_level = props.nest_level ? props.nest_level : 0;
  const CommentsJSX = comment.comments.map((comment) => (
    <Comment key={comment.id} comment={comment} nest_level={nest_level++} />
  ));
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.user_profile} />
        <div className={styles.content}>
          <div className={styles.user_handle}>
            <h2 className={styles.user_name}>{comment.author_id}</h2>
            <p className={styles.date}>{comment.date_created}</p>
          </div>
          <div className={styles.content}>{comment.content}</div>
          <div className={styles.toolbar}>
            <PostToolbar post={comment} />
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: `${nest_level * 30}px`,
        }}
      >
        {CommentsJSX}
      </div>
    </div>
  );
}
