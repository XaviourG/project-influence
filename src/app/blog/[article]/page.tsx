import MarkdownContent from "@/components/article/content/markdown-content";
import ArticleHeading from "@/components/article/heading/article-heading";
import AuthorSignature from "@/components/article/signature/author-signature";
import { getDatabaseService } from "@/data/database/DatabaseService";

import "./styles.scss";

interface Props {
  params: {
    article: string;
  };
}

const ArticlePage = async ({ params }: Props) => {
  const { article: articlePath } = params;

  const DB = getDatabaseService();
  const fetchArticle = await DB.getArticle(articlePath);
  if (!fetchArticle || !fetchArticle.isSuccess)
    throw new Error("Failed to load article");
  const article = fetchArticle.data;

  return (
    <div className="article-page-wrapper">
      <div className="article-page-content">
        <ArticleHeading title={article.subtitle} subtitle={article.subtitle} />
        <MarkdownContent content={article.content} />
        <AuthorSignature publishDate={article.published_at} />
      </div>
    </div>
  );
};

export default ArticlePage;
