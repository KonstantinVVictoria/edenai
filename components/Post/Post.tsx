/* eslint-disable react/jsx-no-comment-textnodes */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import styles from "./styles.module.css";
import PostToolbar from "./Toolbar";
type PostProps = {
  post: PostType;
};
export default function Post(props: PostProps) {
  const { post } = props;

  return (
    <div>
      <Card style={{ width: "100%" }} className={styles.content}>
        <CardHeader style={{ paddingBottom: 0 }}>
          <p className="text-slate-800">//:{post.circle_id}</p>
          <CardTitle className="font-medium text-lg">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>{post.content}</CardContent>

        <CardFooter style={{ gap: "1rem" }}>
          <PostToolbar post={post} />
        </CardFooter>
      </Card>
    </div>
  );
}
