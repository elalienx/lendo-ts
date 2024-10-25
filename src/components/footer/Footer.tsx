// Project files
import "./footer.css";

export default function Footer() {
  // Component
  const GitHubLink = (
    <a href="https://github.com/elalienx" target="_blank" rel="noreferrer">
      github.com/elalienx
    </a>
  );

  return (
    <footer className="footer">
      <small>© 2024 Eduardo Alvarez all rights reserved.</small>
      <br />
      <small>GitHub: {GitHubLink}</small>
    </footer>
  );
}
