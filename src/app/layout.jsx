import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({ subsets: ["latin"], weight: ['300', '600', '700']});

export const metadata = {
  title: "Frontend Mentor | Ping coming soon page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  );
}
