"use client";

import { useParams } from "next/navigation";
import { LayoutProps } from "../../../../.next/types/app/layout";

const ArticleLayout = ({ children }: LayoutProps) => {
  console.log(useParams());

  return <div>Layout{children}</div>;
};

export default ArticleLayout;
