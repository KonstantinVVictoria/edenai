import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import FirebaseHandler, { UserState } from "@/lib/Firebase";
import { UserContext } from "../Viewport/Viewport";
import { useContext } from "react";
import API from "@/api_requests/clientside/API";

export default function Login() {
  return (
    <UserContext.Consumer>
      {([user, setUserState]) => (
        <Card className="w-[300px] h-[200px]">
          <CardHeader className="text-center">
            <CardTitle>Login</CardTitle>
            <CardDescription>Come and try our app!</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button
              onClick={async () => {
                API.loginUser(user, setUserState);
              }}
              variant="outline"
              className="color-secondary text-white"
            >
              Button
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      )}
    </UserContext.Consumer>
  );
}
