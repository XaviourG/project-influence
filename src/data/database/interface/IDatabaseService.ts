import { Article } from "@prisma/client";
import { Result } from "../../utilities/result"
import { ArticlePreview } from "@/data/models/article";

interface IDatabaseService {
  getManyArticlePreview(): Promise<Result<ArticlePreview[]>>;
  getArticle(path: string): Promise<Result<Article>>;
}

export default IDatabaseService;