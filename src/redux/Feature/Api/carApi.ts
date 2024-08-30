import {
  ApiResponse,
  RegisterFormData,
  ResponseGetAllCar,
  TCar,
  TqueryParam,
} from "@/Utills/type";
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
    getAllCars: builder.query<ResponseGetAllCar, string>({
      query: (search) => {
        const url = "/cars";
        const queryParams: TqueryParam = {};

        if (search) {
          queryParams.searchTerm = search;
        }

        // Construct the query string
        const queryString = new URLSearchParams(queryParams).toString();

        return {
          url: `${url}${queryString ? `?${queryString}` : ""}`,
          method: "GET",
        };
      },

      providesTags: ["cars"],
    }),
    getSingleCar: builder.query<TCar, string>({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "GET",
      }),
      providesTags: ["car"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetAllCarsQuery,
  useGetSingleCarQuery,
} = authApi;
