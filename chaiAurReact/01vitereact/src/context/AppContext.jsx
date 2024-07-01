import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+9876";
  const name = "sahil"
  return (
    <AppContext.Provider value={{phone, name}}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;