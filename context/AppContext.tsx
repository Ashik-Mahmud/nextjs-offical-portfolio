import React, { createContext, useContext, useState } from "react";
const AppContext = createContext<any | null>({});

type Props = {
  children: React.ReactNode;
};

const AppContextLayout = ({ children }: Props) => {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <AppContext.Provider value={{ auth }}>{children}</AppContext.Provider>
    </>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextLayout;
export { useAppContext, AppContext };
