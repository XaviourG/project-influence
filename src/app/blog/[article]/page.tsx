"use client";

import ThemeChanger from "@/components/global/test";
import { useParams } from "next/navigation";

const ArticlePage = () => {
  console.log(useParams());
  return (
    <div>
      Page
      <ThemeChanger />
    </div>
  );
};

export default ArticlePage;
