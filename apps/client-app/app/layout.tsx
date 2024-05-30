import "./globals.css";
import type { Metadata } from "next";
import { store } from "@repo/store/store";
import { Provider } from "react-redux";
import { StoreProvider } from "./StoreProvider";
import { SessionProvider } from "next-auth/react";
import MainBar from "../components/MainBar";


export const metadata: Metadata = {
  title: "Ecash",
  description: "Simplified online payment solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
          <StoreProvider>
            <MainBar/>
            {children}</StoreProvider>

      </body>
    </html>
  );
}
