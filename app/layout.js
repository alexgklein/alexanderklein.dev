import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ALEXANDER KLEIN",
  description: "the digitial portfolio of alexander klein",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <NavBar/>
          {children}
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}
