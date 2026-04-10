import { createContext, useState } from "react";

// create a global store
export const Context = createContext();

function ContextProvider({children}) {
  const [name, setName] = useState("Akash");
  const [age, setAge] = useState(20);

  return <Context.Provider value={{name , age}}>
    {children}
  </Context.Provider>;
}

export default ContextProvider;
