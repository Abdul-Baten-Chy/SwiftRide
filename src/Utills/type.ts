export type Tproduct = {
  _id?: string;
  name: string;
  price: number;
  sizes: string[];
  rating: number;
  category: string;
  quantity: number;
  description: string;
  brand: string;
  userQuantity?: number;
  images: string[];
  isFeatured: boolean;
};

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

// Define the structure of individual error messages
interface ErrorMessage {
  path: string;
  message: string;
}

// Define the error data structure
interface ErrorData {
  success: boolean;
  message: string;
  errorMessages: ErrorMessage[];
  stack: string;
}

// Define the error response data structure
interface ErrorResponse {
  status: number;
  data: ErrorData;
}

// Union type to represent either a success or error response
export type signResponse = SuccessResponse | ErrorResponse;
