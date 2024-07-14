type EntityProto = { id: string; date_created: string };

type UserType = {
  date_created: string;
  google_uid: string;
  username: string;
  alias: string;
  posts: string[];
  circles: string[];
  comments: string[];
};

type CircleType = EntityProto & {
  name: string;
  description: string;
  creator: string;
  members: UserType[];
  posts: PostType[];
};

type PostProto = EntityProto & {
  id: string;
  author_id: string;
  circle_id: string;
  date_created: string;
  upvotes: number;
  downvotes: number;
};
type RepliablePostProto = EntityProto & {
  id: string;
  author_id: string;
  circle_id: string;
  date_created: string;
  upvotes: number;
  comments: CommentType[];
  comments_total: number;
  downvotes: number;
};

type PostType = RepliablePostProto & {
  title: string;

  content: string | React.ReactNode;
};

type CommentType = RepliablePostProto & {
  content: string | React.ReactNode;
};

//React Types
type ContainerType = {
  children: React.ReactNode;
};
