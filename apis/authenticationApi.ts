import { API_URL } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const prepareHeaders = (headers: any) => {
  const token = cookies.get("portfolio");
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
};
const AuthenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}`, prepareHeaders }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    getMe: builder.query({
      query: () => `/auth/me`,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetMeQuery } =
  AuthenticationApi;
export default AuthenticationApi;
