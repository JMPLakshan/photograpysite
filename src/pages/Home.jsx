import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">BotherHood Photography</h1>
            <p className="hero-subtitle">Capturing Life's Most Beautiful Moments</p>
            <div className="hero-buttons">
              <Link to="/gallery" className="btn btn-primary">View Gallery</Link>
              <Link to="/contact" className="btn btn-secondary">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Welcome to BotherHood Photography</h2>
          <p className="section-text">
            We specialize in capturing the moments that matter most. From weddings to portraits,
            events to landscapes, our team of professional photographers is dedicated to telling
            your story through stunning imagery.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📷</div>
              <h3>Wedding Photography</h3>
              <p>Capture every precious moment of your special day</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👨‍👩‍👧‍👦</div>
              <h3>Portrait Sessions</h3>
              <p>Professional portraits for individuals and families</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Event Coverage</h3>
              <p>Complete coverage for all your special events</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏞️</div>
              <h3>Landscape Photography</h3>
              <p>Stunning nature and architectural photography</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Photography Packages</h2>
          <div className="packages-grid">
            <div className="package-card">
              <h3 className="package-name">Basic Package</h3>
              <div className="package-price">$299</div>
              <ul className="package-features">
                <li>✓ 2 Hours Coverage</li>
                <li>✓ 50 Edited Photos</li>
                <li>✓ Online Gallery</li>
                <li>✓ High Resolution Files</li>
              </ul>
              <Link to="/contact" className="btn btn-package">Book Now</Link>
            </div>
            <div className="package-card package-featured">
              <div className="featured-badge">Popular</div>
              <h3 className="package-name">Standard Package</h3>
              <div className="package-price">$599</div>
              <ul className="package-features">
                <li>✓ 4 Hours Coverage</li>
                <li>✓ 150 Edited Photos</li>
                <li>✓ Online Gallery</li>
                <li>✓ High Resolution Files</li>
                <li>✓ Photo Album</li>
                <li>✓ Second Photographer</li>
              </ul>
              <Link to="/contact" className="btn btn-package">Book Now</Link>
            </div>
            <div className="package-card">
              <h3 className="package-name">Premium Package</h3>
              <div className="package-price">$999</div>
              <ul className="package-features">
                <li>✓ 8 Hours Coverage</li>
                <li>✓ 300+ Edited Photos</li>
                <li>✓ Online Gallery</li>
                <li>✓ High Resolution Files</li>
                <li>✓ Premium Photo Album</li>
                <li>✓ Two Photographers</li>
                <li>✓ Engagement Session</li>
                <li>✓ Video Highlights</li>
              </ul>
              <Link to="/contact" className="btn btn-package">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Book Your Session?</h2>
          <p>Let's create amazing memories together</p>
          <Link to="/contact" className="btn btn-cta">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
