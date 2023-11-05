import { ArticlePreview } from "@/data/models/article";
import { Article } from "@prisma/client";
import DateText from "../../global/date/DateText";

import "./styles.scss";

interface Props {
  article: Article | ArticlePreview;
}

const ArticlePreview = ({ article }: Props) => {
  return (
    <div className="article-preview">
      <h2 className="title">{article.title}</h2>
      <DateText date={article.published_at} />
    </div>
  );
};

export default ArticlePreview;
