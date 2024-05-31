import type { Metadata } from "next";
import "./globals.css";
import { sfui } from "@/ui/font";
import { Nav } from "@/ui/nav";
import { Footer } from "@/ui/footer";

export const metadata: Metadata = {
  title: "InnovateByte",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sfui.className}>
        <main className="w-full px-5 lg:px-[100px] py-28 lg:pb-24 lg:pt-44 relative">
          <Nav />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
