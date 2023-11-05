"use client";

import DateText from "@/components/global/date/DateText";
import { Article } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  article: Article;
  toggleMenu: () => void;
}

const extendSubtitleToRequiredScrollingLength = (subtitle: string) => {
  const MIN_SCROLLING_LENGTH = 1000;
  const repeatingContent =
    `    |    Check out the latest article: ${subtitle}`.toUpperCase();
  const subtitleLength = repeatingContent.length;
  let subtitleRepetitionsToAdd =
    Math.ceil(MIN_SCROLLING_LENGTH / subtitleLength) - 1;
  let extendedSubtitle = repeatingContent;
  while (subtitleRepetitionsToAdd > 0) {
    extendedSubtitle = extendedSubtitle + repeatingContent;
    subtitleRepetitionsToAdd--;
  }
  console.log({ extendedSubtitle });
  return extendedSubtitle;
};

const LatestArticleShowcase = ({ article, toggleMenu }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${article.pathname}`);
    toggleMenu();
  };

  return (
    <div className="article-showcase-container" onClick={handleClick}>
      <div className="scrolling-subtitle">
        <p>{extendSubtitleToRequiredScrollingLength(article.subtitle)}</p>
      </div>
      <div className="info-container">
        <p className="title">{article.title}</p>
        <DateText date={article.published_at} />
      </div>
    </div>
  );
};

export default LatestArticleShowcase;
