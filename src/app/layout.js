import { Lato, Lexend_Tera } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lexend",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${lexendTera.variable}`}>
      <body className="font-lexend antialiased">{children}</body>
    </html>
  );
}
