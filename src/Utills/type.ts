export interface TCar {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: "available" | "unavailable";
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface TcarQuery {
  name: string;
  images: string[];
  color: string;
  status: "available" | "unavailable";
  pricePerHour: number;
  description: string;
  isElectric: boolean;
  features: string[];
  isDeleted: boolean;
}

export interface ResponseGetAllCar {
  success: boolean;
  statusCode: number;
  message: string;
  data: TCar[];
}
export interface ResponseCreateCar {
  success: boolean;
  statusCode: number;
  message: string;
  data: TCar;
}

export type Tresult = {
  success: boolean;
  statusCode: number;
  message: string;
  data: Tproduct[];
};
export type TresultSingle = {
  id?: string;
  success: boolean;
  statusCode: number;
  message: string;
  data: Tproduct;
};
export type TqueryObj = {
  category: string;
  maxPrice: number;
  minPrice: number;
  searchTerm: string;
};
export type newObj = {
  subTotal?: number;
  price?: number;
  quantity?: number;
  productName?: string;
  id?: string;
};
export type TqueryParam = {
  searchTerm?: string;
};
export type TexistingItem = {
  userQuantity?: number;
};
export type TuserDetails = {
  id?: string;
  quantity?: number;
  address?: string;
  email?: string;
  name?: string;
  userProductInfo?: newObj[];
  userTotalPay?: number;
};

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role: string;
}
export interface TupdateUser {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
  role?: string;
}
export interface signInData {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  _id: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}

// Define the type for the overall response
export interface ApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserData;
}
interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

// Define the data object containing user and token
interface DataResponse {
  user: User;
  token: string;
}

// Define the success response data structure
interface SuccessResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: DataResponse;
}

// Define the error response data structure
interface ErrorResponse {
  error: {
    status: number;
    data: {
      success: boolean;
      message: string;
      errorMessages: { path: string; message: string }[];
      stack: string;
      data?: {
        token: string;
        user: object;
      };
    };
  };
}

export interface Booking {
  _id: string;
  startTime: string;
  endTime: string;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
}

export interface TableGridProps {
  myBookings: Booking[];
}

// Union type to represent either a success or error response
export type signResponse = SuccessResponse | ErrorResponse;
