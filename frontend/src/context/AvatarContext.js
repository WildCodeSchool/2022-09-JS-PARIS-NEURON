import { createContext, useContext } from "react";

export const AvatarContext = createContext();

export const useAvatarContext = () => useContext(AvatarContext);
