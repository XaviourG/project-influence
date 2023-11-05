import ArticleList from "@/components/library/preview/ArticleList";
import { getDatabaseService } from "@/data/database/DatabaseService";

import "./styles.scss";
import LibraryWelcome from "@/components/library/welcome/LibraryWelcome";

const BlogPage = async () => {
  const DB = getDatabaseService();
  const latestArticle = await DB.getLatestArticle();
  if (!latestArticle || !latestArticle.isSuccess)
    throw new Error("failed to get latest article");

  return (
    <div className="library-page-wrapper">
      <div className="library-page-container">
        <LibraryWelcome />
        <ArticleList />
      </div>
    </div>
  );
};

export default BlogPage;
