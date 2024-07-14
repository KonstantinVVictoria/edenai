"use client";
import Field from "@/components/Field/Field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserContext } from "@/components/Viewport/Viewport";
import { UserState } from "@/lib/Firebase";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <UserContext.Consumer>
        {([user, setUserState]) =>
          (user.current_user === false && null) ||
          (user.current_user === null && <SplashPage user={user} />) ||
          (user.current_user && <FeedPage user={user} />)
        }
      </UserContext.Consumer>
    </main>
  );
}

type UserPageProps = {
  user: UserState;
};
type SplashPageProps = UserPageProps & {};

type FeedPageProps = UserPageProps & {};
function SplashPage(props: SplashPageProps) {
  const { user } = props;
  return (
    <div>
      <SplashBanner />
    </div>
  );
}

function FeedPage(props: FeedPageProps) {
  const { user } = props;

  return (
    <div>
      <FirstCommunity />
    </div>
  );
}

function FirstCommunity() {
  return (
    <Card style={{ width: "800px", margin: "10px 0px" }}>
      <CardHeader>
        <CardTitle>Be the first, and start a community</CardTitle>
      </CardHeader>
      <CardContent>
        <Field
          label="Name of your community"
          placeholder="Give it a cool name!"
        />{" "}
        <Field
          label="Description of your community"
          placeholder="What are ya'll about?
          "
        />
      </CardContent>
      <CardFooter>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
}

function SplashBanner() {
  return (
    <Image
      src={"/images/splash_page_banner.png"}
      width={500}
      height={300}
      style={{
        objectFit: "cover",
        height: "300px",
        borderRadius: "7px",
        width: "500px",
        overflow: "hidden",
      }}
      alt="cool forest with huge circle structure in the middle"
    />
  );
}
