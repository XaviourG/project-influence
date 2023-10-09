import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutProps } from "../../.next/types/app/layout";
import { Providers } from "@/components/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influence Garden",
  description: "Cultivating connection in a disconnected age.",
};

const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default LandingLayout;
