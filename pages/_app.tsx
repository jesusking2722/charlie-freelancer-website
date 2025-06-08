import { ThemeProvider } from "@/contexts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Urbanist, Playfair_Display } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={`${urbanist.variable} ${playfair.variable}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
