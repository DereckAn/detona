import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Detona Clean",
  description: "Professional cleaning services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={cn("bg-dark text-gray-300", font.className)}>
      <main className="">
        {children}
      </main>
    </body>
  </html>
  );
}
