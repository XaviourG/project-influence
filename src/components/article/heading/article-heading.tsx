import "./styles.scss";

interface Props {
  title: any;
  subtitle: any;
}

const ArticleHeading = ({ title, subtitle }: Props) => {
  return (
    <div className="article-heading-container">
      <h1 className="title">{title}</h1>
      <h6 className="subtitle">{subtitle}</h6>
    </div>
  );
};

export default ArticleHeading;
