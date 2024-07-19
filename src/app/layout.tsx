import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Operations } from "@/components/operations";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <link
            rel="preload"
            as="font"
            type="font/ttf"
            href="/fonts/XiaolaiSC-Regular.ttf"
            crossOrigin="anonymous"
          />
          {/* <link
            rel="preload"
            as="font"
            type="font/ttf"
            href="/fonts/Kosefont-JP.ttf"
            crossOrigin="anonymous"
          /> */}
        </head>
        <body className="relative bg-white dark:bg-gray-900">
          <ThemeProvider attribute="class" defaultTheme="system">
            <Operations />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
