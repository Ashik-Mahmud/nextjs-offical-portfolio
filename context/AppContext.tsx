import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
const AppContext = createContext<any | null>({});

type Props = {
  children: React.ReactNode;
};

const AppContextLayout = ({ children }: Props) => {
  const [cookies] = useCookies(["portfolio"]);
  const [isAuth, setIsAuth] = useState(true);
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cookie, setCookie] = useState(null);

  /* call api for get the current login user */
  const getCurrentUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${cookie || cookies?.portfolio}`,
        },
      });
      setCurrentUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (cookies?.portfolio || cookie) {
      setCookie(cookie || cookies?.portfolio);
      getCurrentUser();
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
        value={{ isAuth, setCookie, isLoading, currentUser, setCurrentUser }}
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
