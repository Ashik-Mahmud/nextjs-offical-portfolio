import { API_URL } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const prepareHeaders = (headers: any) => {
  const token = cookies.get("portfolio");
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
};

const HomeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}`, prepareHeaders }),
  tagTypes: ["HomeApi"],
  endpoints: (builder) => ({
    getHome: builder.query({
      query: () => "/home/get",
      providesTags: ["HomeApi"],
    }),

    saveHome: builder.mutation({
      query: (data) => ({
        url: "/home/save",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["HomeApi"],
    }),
  }),
});

export const { useGetHomeQuery, useSaveHomeMutation } = HomeApi;
export default HomeApi;
