import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { LayoutProps } from "../../.next/types/app/layout";
import { Providers } from "@/components/providers/providers";
import Navbar from "@/components/navigation/navbar/Navbar";
import Footer from "@/components/navigation/footer/Footer";
import { getDatabaseService } from "@/data/database/DatabaseService";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Influence Garden",
  description: "Cultivating connection in a disconnected age.",
};

const LandingLayout = async ({ children }: LayoutProps) => {
  const DB = getDatabaseService();
  const latestArticle = await DB.getLatestArticle();
  if (!latestArticle || !latestArticle.isSuccess)
    throw new Error("failed to get latest article");

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar latestArticle={latestArticle.data}>
            <Footer>{children}</Footer>
          </Navbar>
        </Providers>
      </body>
    </html>
  );
};

export default LandingLayout;
