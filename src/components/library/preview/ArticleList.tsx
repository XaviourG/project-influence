import { getDatabaseService } from "@/data/database/DatabaseService";
import ArticlePreview from "./ArticlePreview";

import "./styles.scss";

const ArticleList = async () => {
  const DB = getDatabaseService();
  const articles = await DB.getManyArticlePreview();
  if (!articles || !articles.isSuccess)
    throw new Error("failed to get articles for list");

  return (
    <div className="article-list">
      {articles.data.map((article, index) => (
        <div key={index} className="article-preview-wrapper">
          <ArticlePreview article={article} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
