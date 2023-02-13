import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: any }) {
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactNode) => <MainLayout>{page}</MainLayout>);
  return getLayout(<Component {...pageProps} />);
}
