"use client";

import { useParams } from "next/navigation";

const ArticlePage = () => {
  console.log(useParams());
  return <div style={{ height: "300vh" }}>Page</div>;
};

export default ArticlePage;
