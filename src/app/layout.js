import Navbar from "@/components/navbar";
import "./globals.css";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Kanit, Poppins } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Europe House",
  description: "Europe House",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kanit.variable} ${poppins.variable}`}>
      <body>
        <Providers>
          <Navbar />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
