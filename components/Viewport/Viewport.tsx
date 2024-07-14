"use client";
import FirebaseHandler, { UserState, user_state } from "@/lib/Firebase";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./styles.module.css";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "firebase/auth";
type ViewportProps = ContainerType & {};
export const UserContext = createContext<
  [UserState, Dispatch<SetStateAction<UserState>>]
>([user_state, () => {}]);

export default function Viewport(props: ViewportProps) {
  const [current_user, changeState] = useState(user_state);

  useEffect(() => {
    user_state.current_user = FirebaseHandler.checkLoggedIn();
    FirebaseHandler.onStateChange(current_user, changeState);
  }, []);

  //user_state.current_user = FirebaseHandler.checkLoggedIn();
  return (
    <div className={styles.viewport}>
      <UserContext.Provider value={[current_user, changeState]}>
        <Navbar />
        <main className={styles.main}>
          <Sidebar />
          <Content>{props.children}</Content>
        </main>
      </UserContext.Provider>
    </div>
  );
}

type ContentProps = ContainerType & {};
export function Content(props: ContentProps) {
  return <div className={styles.content}>{props.children}</div>;
}
