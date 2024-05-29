import "./globals.css";
import type { Metadata } from "next";
import {store} from '@repo/store/store';
import { Provider } from 'react-redux'
import { StoreProvider } from "./StoreProvider";


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
{children}
</StoreProvider>
        
 
        

        
      </body>
    </html>
  );
}
