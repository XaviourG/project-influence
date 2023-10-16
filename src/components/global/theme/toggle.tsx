import { useTheme } from "next-themes";
import "./styles.scss";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="theme-toggle-root" onClick={handleToggle}>
      <div className={`selector ${theme}`} />
    </div>
  );
};

export default ThemeToggle;
