import { API_URL } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import Cookies from "universal-cookie";

const cookies = new Cookies();

const prepareHeaders = (headers: any, getState: any) => {
  const token = cookies.get("portfolio") as string | undefined;
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return headers;
};

const skillApi = createApi({
  reducerPath: "skillApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}`, prepareHeaders }),
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => "/skill",
    }),
    getSkill: builder.query({
      query: (id: number) => `/skill/${id}`,
    }),
    createSkill: builder.mutation({
      query: (skill: any) => ({
        url: "/skill/create",
        method: "POST",
        body: skill,
      }),
    }),
    updateSkill: builder.mutation({
      query: (skill: any) => ({
        url: `/skill/${skill.id}`,
        method: "PUT",
        body: skill,
      }),
    }),
    deleteSkill: builder.mutation({
      query: (id: string) => ({
        url: `/skill/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useGetSkillQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillApi;
export default skillApi;
