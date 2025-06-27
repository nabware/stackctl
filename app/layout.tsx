import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "stackctl",
  description: "The stackctl website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
