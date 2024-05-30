"use client";

import { Provider } from "react-redux";
import { store } from "@repo/store/store";
import { SessionProvider} from "next-auth/react";


export function StoreProvider({ children }: any) {

  return (
    <Provider store={store}>
             
      <SessionProvider>

        {children}
        </SessionProvider>
    </Provider>
  );
}
