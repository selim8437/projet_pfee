import { createContext, useContext } from "react";

interface MyContextType {
    num: string;
    setNum: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export const MyContext = createContext<MyContextType | undefined>(undefined);