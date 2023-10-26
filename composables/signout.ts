import { getAuth, signOut } from "firebase/auth";

export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    return result;
  };