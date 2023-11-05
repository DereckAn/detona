import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";

const font = Figtree({ subsets: ["latin"] });

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
