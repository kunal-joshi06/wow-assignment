"use client";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { store } from "./store";
import { Provider } from "react-redux";
import { blogsApi } from "./features/apiSlice";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
