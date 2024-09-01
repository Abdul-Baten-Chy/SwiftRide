import {
  ApiResponse,
  RegisterFormData,
  signInData,
  signResponse,
  TupdateUser,
} from "@/Utills/type";
import { userLoggedIn } from "../authSlice";
import { Api } from "./api";

const authApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<ApiResponse, RegisterFormData>({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation<ApiResponse, TupdateUser>({
      query: (data) => ({
        url: "/auth/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: builder.query<ApiResponse, string>({
      query: (data) => {
        console.log(data);

        return {
          url: `/auth/${data}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    signIn: builder.mutation<signResponse, signInData>({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.data?.token,
              user: result?.data?.data?.user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateUserMutation,
  useSignInMutation,
  useUpdateUserMutation,
  useGetUserQuery,
} = authApi;
