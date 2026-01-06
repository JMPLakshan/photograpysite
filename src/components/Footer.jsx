import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>BrotherHood Photography</h3>
          <p>Capturing moments that last forever. Professional photography services for all your special occasions.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/photo-tours">Photo Tours</Link></li>
            <li><Link to="/cultural-festivals">Festivals</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Wedding Photography</Link></li>
            <li><Link to="/services">Portrait Sessions</Link></li>
            <li><Link to="/services">Event Coverage</Link></li>
            <li><Link to="/services">Commercial Photography</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 123 Photography Street<br />Colombo, Sri Lanka</p>
          <p>📧 info@botherhoodphoto.com</p>
          <p>📞 +94 XX XXX XXXX</p>
          <p>⏰ Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2026 BotherHood Photography. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
