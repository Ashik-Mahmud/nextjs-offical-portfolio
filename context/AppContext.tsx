import { useGetMeQuery } from "@/apis/authenticationApi";
import React, { createContext, useContext, useEffect, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
const AppContext = createContext<any | null>({});

type Props = {
  children: React.ReactNode;
};

const AppContextLayout = ({ children }: Props) => {
  const [cookies] = useCookies(["portfolio"]);
  const [isAuth, setIsAuth] = useState(true);
  const [cookie, setCookie] = useState(null);

  /* call api for get the current login user */
  const { data: currentUser, isLoading, error } = useGetMeQuery({});

  useEffect(() => {
    if (cookies?.portfolio || cookie) {
      setCookie(cookie || cookies?.portfolio);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies, cookie]);

  useEffect(() => {
    if (currentUser?._id) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [currentUser]);

  return (
    <>
      <AppContext.Provider
        value={{ isAuth, setCookie, isLoading, currentUser }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextLayout;
export { useAppContext, AppContext };
