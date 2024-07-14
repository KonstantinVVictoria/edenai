"use client";
import Article from "@/components/Article/Article";
import { useParams } from "next/navigation";
const sub_comment_1: CommentType = {
  id: "test",
  author_id: "test",
  circle_id: "gaming",
  date_created: "test",
  upvotes: 3,
  downvotes: 3,
  comments_total: 100,
  content: "hello there",
  comments: [],
};
const sub_comment: CommentType = {
  id: "test",
  author_id: "test",
  circle_id: "gaming",
  date_created: "test",
  upvotes: 3,
  downvotes: 3,
  comments_total: 100,
  content: "hello there",
  comments: [sub_comment_1],
};
const comment: CommentType = {
  id: "test",
  author_id: "test",
  circle_id: "gaming",
  date_created: "test",
  upvotes: 3,
  downvotes: 3,
  comments_total: 100,
  content: "hello there",
  comments: [sub_comment],
};
const test: PostType = {
  id: "test",
  author_id: "test",
  circle_id: "gaming",
  date_created: "test",
  upvotes: 3,
  downvotes: 3,
  title: "hello",
  content: "hello there",
  comments_total: 100,
  comments: [comment, comment, comment],
};
export default function Page() {
  const router = useParams();
  return <Article post={test} />;
}
