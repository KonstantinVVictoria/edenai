import { Button } from "../ui/button";
type PostToolbarProps = {
  post: {
    comments_total: number;
  };
};
export default function PostToolbar(props: PostToolbarProps) {
  const { post } = props;
  return (
    <>
      <Button>upvote</Button>
      <Button>downvote</Button>
      Comments:{post.comments_total}
    </>
  );
}
