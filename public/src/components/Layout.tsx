"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
     
        <SessionProvider>{children}</SessionProvider>
      
    </Provider>
  )
};

export default Layout;
