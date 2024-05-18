import { auth, googleAuthProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { cookies } from "next/dist/client/components/headers";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  currentUser: {
    user_id: string;
    username: string | null;
    email: string | null;
    avatar: string | null;
  } | null;
  login: () => Promise<any>;
  signOut: () => Promise<void>;
  getUser: () => any;
}>({
  currentUser: null,
  login: async () => {},
  signOut: async () => {},
  getUser: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<{
    user_id: string;
    username: string | null;
    email: string | null;
    avatar: string | null;
  } | null>();
  const [loading, setLoading] = useState(true);

  async function login() {
    const userCredentials = await signInWithPopup(auth, googleAuthProvider);
    setCurrentUser({
      user_id: userCredentials.user.uid,
      username: userCredentials.user.displayName,
      email: userCredentials.user.email,
      avatar: userCredentials.user.photoURL,
    });
    return userCredentials;
  }

  function signOut() {
    return auth.signOut();
  }

  function getUser() {
    return auth.currentUser?.uid || null;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser((c) => {
        if (c === null && user) {
          return {
            user_id: user.uid,
            username: user.displayName,
            email: user.email,
            avatar: user.photoURL,
          };
        } else if (c !== null && user === null) {
          return null;
        } else {
          return c;
        }
      });
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signOut,
    getUser,
  };
  //@ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
