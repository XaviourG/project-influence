"use client";

import { useParams } from "next/navigation";

const ArticlePage = () => {
  console.log(useParams());
  return <div>Page</div>;
};

export default ArticlePage;
