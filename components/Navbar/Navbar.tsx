import Image from "next/image";
import { Button } from "../ui/button";
import styles from "./styles.module.css";
import FirebaseHandler from "@/lib/Firebase";
import { UserContext } from "../Viewport/Viewport";

export default function Navbar() {
  return (
    <UserContext.Consumer>
      {([user, changeUserState]) => (
        <header className={styles.container}>
          <Image />
          {(user.current_user && (
            <Button
              onClick={FirebaseHandler.signOut}
              className={styles.signout}
            >
              Sign out
            </Button>
          )) ||
            null}
        </header>
      )}
    </UserContext.Consumer>
  );
}
