import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "movae",
  description: "Learn, earn, and take your turn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
