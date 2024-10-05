import {Inter} from "next/font/google";
import "./globals.css";

import Menu from "@/components/menu/Menu"

const inter = Inter({ subsets: ["latin"] }) 

export const metadata = {
  title: "Next JS x GSAP Navigation Menu",
  description: "By Aditya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
