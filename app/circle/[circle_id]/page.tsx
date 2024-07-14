"use client";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import Post from "@/components/Post/Post";
const comment: CommentType = {
  id: "test",
  author_id: "test",
  circle_id: "gaming",
  date_created: "test",
  upvotes: 3,
  downvotes: 3,
  content: "hello there",
  replies: [],
};
const post: PostType = {
  id: "test",
  author_id: "test",
  circle_id: "gaming",
  date_created: "test",
  upvotes: 3,
  downvotes: 3,
  title: "hello",
  content: "hello there",
  comments_total: 100,
  comments: [comment],
};
const test: CircleType = {
  date_created: "",
  id: "1234",
  name: "Homomorphists",
  description: "Community of non-descript mathematicians.",
  creator: "1234",
  members: [],
  posts: [post, post, post, post],
};
export default function Page(props: CircleType) {
  const circle = test;
  const router = useParams();
  const PostsJSX = circle.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));
  return (
    <div className={styles.page}>
      <div className={styles.splash}>
        <div className={styles.banner}>{/* Banner content goes here */}</div>
        <div className={styles.toolbar}>
          <div className={styles["circle-header"]}>
            <div className={styles["circle-logo"]}>
              {/* Circle logo content goes here */}
            </div>
            <div className={styles["circle-title"]}>{circle.name}</div>
          </div>
          <div className={styles.introduction}>{circle.description}</div>
          <div className={styles.tools}>
            <Button className={styles["create-post"]}>Create Post</Button>
            <div className={styles.join}>
              <Button className={styles["create-post"]}>Join</Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.posts}>{PostsJSX}</div>
    </div>
  );
}
