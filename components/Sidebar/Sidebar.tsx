import { User } from "firebase/auth";
import Login from "../Login/Login";
import styles from "./styles.module.css";

import { UserContext } from "../Viewport/Viewport";
import { UserState } from "@/lib/Firebase";

export default function Sidebar() {
  return (
    <UserContext.Consumer>
      {([user, setUserState]) => (
        <aside className={styles.container}>
          {(user.current_user === false && null) ||
            (user.current_user === null && <Login />) ||
            (user.current_user && <SideProfile user={user} />)}
        </aside>
      )}
    </UserContext.Consumer>
  );
}
type SideProfileProps = {
  user: UserState;
};
function SideProfile(props: SideProfileProps) {
  const user = props.user.current_user as User;
  return (
    <div className={styles.side_profile}>
      <div className={styles.profile}>
        <img
          className={styles.profile_img}
          src={user.photoURL as string}
          alt="Profile"
        />
        <h1 className={styles.name}>{user.displayName}</h1>
      </div>
      <div className={styles.communities}>{/* Communities content */}</div>
      <div className={styles.recent_posts}>{/* Recent posts content */}</div>
    </div>
  );
}
