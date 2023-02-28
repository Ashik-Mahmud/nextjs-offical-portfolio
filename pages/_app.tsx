import store from "@/app/store";
import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
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
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}
