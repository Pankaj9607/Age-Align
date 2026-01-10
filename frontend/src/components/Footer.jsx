import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AgeAlign</p>
      <p>Biological Age Estimation System</p>
    </footer>
  );
}

export default Footer;