import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { LayoutProps } from "../../.next/types/app/layout";
import { Providers } from "@/components/providers/providers";
import Navbar from "@/components/navigation/navbar/Navbar";
import Footer from "@/components/navigation/footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influence Garden",
  description: "Cultivating connection in a disconnected age.",
};

const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar>
            <Footer>{children}</Footer>
          </Navbar>
        </Providers>
      </body>
    </html>
  );
};

export default LandingLayout;
