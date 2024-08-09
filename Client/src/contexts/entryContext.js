import { createContext, useContext } from "react";

export const entryContext = createContext({
    toggle : "Signup",
    renderSignup: ()=>{},
    renderLogin: ()=>{}
});

export const EntryContextProvider = entryContext.Provider;

export default function useEntry(){
    return useContext(entryContext);
};