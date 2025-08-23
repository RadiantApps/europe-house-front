import "./globals.css";
import Navbar from "@/components/navbar";
import { Providers } from "./providers";

export const metadata = {
  title: "Europa House",
  description: "Europa House",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
