import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps}></Component>
    </Layout>
  );
}
