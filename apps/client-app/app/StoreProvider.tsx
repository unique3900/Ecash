"use client";

import { Provider } from "react-redux";
import {store} from "@repo/store/store"

export function StoreProvider({ children }:any) {
  return <Provider store={store}>{children}</Provider>
}