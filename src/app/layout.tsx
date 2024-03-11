import type { Metadata } from "next";
import { outfit } from './styles/fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "Mary`s cookbook",
  description: "Find many delicious recipes from Mary`s cookbook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
