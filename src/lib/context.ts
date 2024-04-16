import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth"

type UserType = ReturnType<typeof useAuthState>[0]

type UserContextType = {
	user: UserType | null;
}

export const UserContext = createContext<UserContextType>({ user: null });
