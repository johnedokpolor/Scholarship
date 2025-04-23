import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Tech Scholarship",
  description: "Unlock Your Future With Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex justify-center`}>
        <Toaster />
        <div>{children}</div>
      </body>
    </html>
  );
}
