import { createContext, useContext } from "react";

export const messageContext = createContext();

export const useMessageContext = () => useContext(messageContext);
