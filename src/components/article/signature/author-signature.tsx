import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

import "./styles.scss";

interface Props {
  name?: string;
  bio?: string;
  image: string;
  publishDate: Date | null;
}

const AuthorSignature = ({ name, bio, image, publishDate }: Props) => {
  return (
    <div className="signature-container">
      <div className="flex-container">
        <div className="vertical-container">
          <div className="image-container">
            <img className="author-image" src={image} />
          </div>
          <div className="socials-container">
            <a
              className="social-button"
              href="https://www.linkedin.com/in/xaviourg/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="social-button"
              href="https://www.instagram.com/yourlordandxaviour/"
              target="_blank"
            >
              <FaInstagramSquare />
            </a>
            <a
              className="social-button"
              href="https://twitter.com/XaviourDG"
              target="_blank"
            >
              <FaTwitterSquare />
            </a>
          </div>
        </div>
        <div className="author-container">
          <h4 className="author-name">{name}</h4>
          <p className="author-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorSignature;
