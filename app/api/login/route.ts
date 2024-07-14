import { LoginUserReq } from "@/api_requests/clientside/API";
import MongoHandler from "@/lib/Mongo";
import { NextResponse } from "next/server";

export type LoginRes = {
  message: string;
  error?: string;
  data: UserType;
};
export async function POST(request: Request) {
  const data: LoginUserReq = await request.json();
  if (!data.uid)
    return NextResponse.json(
      {
        error: "Bad request",
      },
      { status: 400 }
    );

  const users = await MongoHandler.Collections.users();
  console.log(users);
  if (!users)
    return NextResponse.json(
      {
        error: "Uh oh",
      },
      { status: 500 }
    );
  const entry = await users.findOne(
    {
      _id: data.uid,
    },
    {
      projection: {
        date_created: 1,
        username: 1,
        alias: 1,
        posts: 1,
        circles: 1,
        comments: 1,
        google_uid: 1,
      },
    }
  );
  if (entry) {
    const user: UserType = { ...entry, _id: undefined } as UserType;

    return NextResponse.json<LoginRes>(
      { message: "signup", data: user },
      { status: 200 }
    );
  } else {
    const user: UserType = {
      date_created: `${new Date().getTime()}`,
      google_uid: data.uid,
      username: data.username,
      alias: "",
      posts: [],
      circles: [],
      comments: [],
    };
    const result = await users.insertOne({
      _id: data.uid,
      ...user,
    });
    if (result.acknowledged) {
      return NextResponse.json(
        {
          message: "success",
          data: user,
        },
        { status: 201 }
      );
    } else
      return NextResponse.json(
        {
          error: "Uh oh",
        },
        { status: 500 }
      );
  }
}
