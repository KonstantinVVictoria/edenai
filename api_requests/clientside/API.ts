import FirebaseHandler, { UserState } from "@/lib/Firebase";
import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { UserSchema } from "../Schemas";
import axios from "axios";
async function createNewUser(
  current_state: UserState | null,
  setUserState: SetStateAction<UserState>
) {}
export type LoginUserReq = {
  uid: string;
  username: string;
};
async function loginUser(
  current_state: UserState | null,
  setUserState: Dispatch<SetStateAction<UserState>>
) {
  const new_state = { ...current_state };
  new_state.current_user = await FirebaseHandler.signInWithGoogle();

  const uid = new_state.current_user?.uid;
  if (!uid) return;
}

async function createCircle(circle: CircleType) {}
const API = { createNewUser, loginUser };
export default API;
