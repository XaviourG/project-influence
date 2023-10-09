import { useParams } from "next/navigation";
import { LayoutProps } from "../../../../.next/types/app/layout";
import { getDatabaseService } from "@/data/database/DatabaseService";
import { useEffect, useState } from "react";
import { Article } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface Props {
  params: {
    article: string;
  };
}

const ArticleLayout = async ({ params }: Props) => {
  const { article: articlePath } = params;

  const DB = getDatabaseService();
  const fetchArticle = await DB.getArticle(articlePath);
  if (!fetchArticle || !fetchArticle.isSuccess)
    throw new Error("Failed to load article");

  return <div>{fetchArticle.data.content}</div>;
};

export default ArticleLayout;
