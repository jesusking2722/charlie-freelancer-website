import { ThemeProvider } from "@/contexts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
