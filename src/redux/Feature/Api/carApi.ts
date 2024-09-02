import {
  ApiResponse,
  RegisterFormData,
  ResponseCreateCar,
  ResponseGetAllCar,
  TCar,
  TcarQuery,
  TqueryParam,
  TupdateCar,
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
    getAllBookings: builder.query<ResponseGetAllCar, string>({
      query: () => {
        return {
          url: "/bookings/my-bookings",
          method: "GET",
        };
      },

      providesTags: ["my-bookins"],
    }),
    getAllCarBooking: builder.query<ResponseGetAllCar, undefined>({
      query: () => {
        return {
          url: "/bookings/all-bookings",
          method: "GET",
        };
      },

      providesTags: ["all-bookins"],
    }),
    getSingleCar: builder.query<TCar, string>({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "GET",
      }),
      providesTags: ["car"],
    }),
    createCar: builder.mutation<ResponseCreateCar, TcarQuery>({
      query: (data) => ({
        url: "/cars",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cars"],
    }),
    editCar: builder.mutation<ResponseCreateCar, Partial<TupdateCar>>({
      query: ({ id, data }) => ({
        url: `/cars/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["cars", "car"],
    }),
    deleteCar: builder.mutation<void, string>({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useGetAllBookingsQuery,
  useGetAllCarBookingQuery,
  useCreateCarMutation,
  useEditCarMutation,
  useDeleteCarMutation,
} = authApi;
