import { createContext,useContext } from "react";

export const Themecontext=createContext({
    themeMode:"Light",
    darktheme:()=>{},
    lighttheme:()=>{}
})
export const Themeprovider=Themecontext.Provider //for binding all the children within it 
export default function useTheme(){ //custom hook is now defined for context xalling
    return useContext(Themecontext)
}