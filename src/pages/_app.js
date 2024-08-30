import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout/layout";
import { CartProvider } from "@/utils/Contextreducer";

export default function App({ Component, pageProps }) {
  return( 
    <ThemeProvider attribute="class">
      <CartProvider>
    <Layout>
  <Component {...pageProps} /></Layout></CartProvider>
  </ThemeProvider>
  );
}
