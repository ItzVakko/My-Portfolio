import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";

const Fredoka = localFont({
  src: "./Assets/Fonts/Fredoka-Font.woff",
  variable: "--font-fredoka",
  weight: "100 100",
});

const Teko = localFont({
  src: "./Assets/Fonts/Teko-Regular.woff",
  variable: "--font-teko",
  weight: "100 100",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${Fredoka.variable} ${Teko.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
