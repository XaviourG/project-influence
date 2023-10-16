"use client";

import ThemeChanger from "@/components/global/test";
import { useParams } from "next/navigation";

const ArticlePage = () => {
  console.log(useParams());
  return (
    <div style={{ height: "300vh" }}>
      Page
      <ThemeChanger />
    </div>
  );
};

export default ArticlePage;
