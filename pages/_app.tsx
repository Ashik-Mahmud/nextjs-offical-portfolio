import store from "@/app/store";
import MainLayout from "@/components/layouts/MainLayout";
import AppContextLayout from "@/context/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: any }) {
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactNode) => <MainLayout>{page}</MainLayout>);
  return (
    <>
      <Toaster
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,

          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              border: "1px solid #2cce98",
              padding: "16px",
              color: "#2cce98",
            },
            iconTheme: {
              primary: "#2cce98",
              secondary: "#FFFAEE",
            },
          },
          error: {
            duration: 3000,
            style: {
              border: "1px solid #f87272",
              padding: "16px",
              color: "#f87272",
            },
            iconTheme: {
              primary: "#f87272",
              secondary: "#FFFAEE",
            },
          },
        }}
      />
      <Provider store={store}>
        <AppContextLayout>
          {getLayout(<Component {...pageProps} />)}
        </AppContextLayout>
      </Provider>
    </>
  );
}
