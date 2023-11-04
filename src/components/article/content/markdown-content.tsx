"use client";

import Markdown from "react-markdown";
import "./styles.scss";

interface Props {
  content: string;
}

const MarkdownContent = ({ content }: Props) => {
  return (
    <div className="markdown-wrapper">
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default MarkdownContent;
