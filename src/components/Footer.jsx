import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>BotherHood Photography</h3>
          <p>Capturing moments that last forever</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@botherhoodphoto.com</p>
          <p>Phone: +94 XX XXX XXXX</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 BotherHood Photography. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
