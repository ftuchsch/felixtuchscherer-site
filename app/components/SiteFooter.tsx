export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="section-label">Connect</p>
          <p className="site-footer__note">
            Computational biology, protein modeling, and the ideas between them.
          </p>
        </div>

        <nav className="site-footer__links" aria-label="External links">
          <a href="mailto:felix.tuchscherer@gmail.com">Email</a>
          <a href="https://github.com/ftuchsch" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/felix-tuchscherer/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://scholar.google.com/citations?user=8kM3hCUAAAAJ&hl=en&authuser=1&oi=ao"
            target="_blank"
            rel="noreferrer"
          >
            Scholar <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
      <div className="site-footer__baseline">
        <span>Felix Tuchscherer</span>
        <span>Boston, MA</span>
      </div>
    </footer>
  );
}
