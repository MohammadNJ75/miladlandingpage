import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

const myFont = localFont({
  src: "./assets/YekanBakhFaNum-VF.woff2",
});

export const metadata: Metadata = {
  title: "پیش فروش کتاب میکروتیک",
  description: "بهترین کتاب میکروتیک ایران",
  generator: "Nejati.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" suppressHydrationWarning className={myFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
