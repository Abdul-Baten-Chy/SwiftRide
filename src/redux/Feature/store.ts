import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Feature/productSlice.ts";
import { Api } from "./Api/api.ts";
import authSliceReducer from "./authSlice.ts";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    cart: cartReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
