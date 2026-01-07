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

      {/* Photo Tours Section */}
      <section className="photo-tours-preview">
        <div className="container">
          <h2 className="section-title">Explore Sri Lanka with Photo Tours</h2>
          <p className="section-subtitle">Capture iconic destinations with professional photographers</p>
          
          <div className="tours-preview-grid">
            <div className="tour-preview-card">
              <div className="tour-preview-image">
                <img src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600" alt="Sigiriya" />
              </div>
              <div className="tour-preview-content">
                <h3>🏯 Sigiriya Rock Fortress</h3>
                <p>Ancient wonder with stunning views</p>
                <span className="tour-preview-price">From $450</span>
              </div>
            </div>

            <div className="tour-preview-card">
              <div className="tour-preview-image">
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600" alt="Beach" />
              </div>
              <div className="tour-preview-content">
                <h3>🏖️ Hikkaduwa Beach</h3>
                <p>Tropical paradise photography</p>
                <span className="tour-preview-price">From $380</span>
              </div>
            </div>

            <div className="tour-preview-card">
              <div className="tour-preview-image">
                <img src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600" alt="Nuwara Eliya" />
              </div>
              <div className="tour-preview-content">
                <h3>☕ Nuwara Eliya</h3>
                <p>Tea plantations & misty mountains</p>
                <span className="tour-preview-price">From $420</span>
              </div>
            </div>

            <div className="tour-preview-card">
              <div className="tour-preview-image">
                <img src="https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=600" alt="Ella" />
              </div>
              <div className="tour-preview-content">
                <h3>🌉 Ella & Nine Arch Bridge</h3>
                <p>Iconic bridge & mountain views</p>
                <span className="tour-preview-price">From $395</span>
              </div>
            </div>
          </div>

          <div className="tours-preview-cta">
            <Link to="/photo-tours" className="btn btn-primary">View All Photo Tours</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real stories from real clients</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "BotherHood Photography captured our wedding day perfectly! Every moment was 
                beautifully documented. Their professionalism and creativity exceeded our expectations. 
                We'll treasure these photos forever!"
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Client" />
                <div>
                  <h4>Sarah & John</h4>
                  <p>Wedding Photography</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Amazing family portraits! The team made us feel comfortable and captured our 
                family's personality perfectly. The photos are absolutely stunning and we've 
                received so many compliments!"
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Client" />
                <div>
                  <h4>Michael Rodriguez</h4>
                  <p>Portrait Session</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Professional, creative, and reliable! They covered our corporate event and 
                delivered exceptional photos that we're using across all our marketing materials. 
                Highly recommended!"
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" alt="Client" />
                <div>
                  <h4>Jennifer Chen</h4>
                  <p>Corporate Event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Festivals Preview Section */}
      <section className="festivals-preview">
        <div className="container">
          <h2 className="section-title">Cultural Festivals Photography</h2>
          <p className="section-subtitle">Capture the vibrant traditions and celebrations of Sri Lanka</p>
          
          <div className="festivals-preview-grid">
            <div className="festival-preview-card">
              <div className="festival-preview-image">
                <img src="https://images.unsplash.com/photo-1599982629236-73a5c1c7c4bb?w=500" alt="New Year" />
              </div>
              <div className="festival-preview-content">
                <span className="festival-emoji">🎊</span>
                <h3>Sinhala & Tamil New Year</h3>
                <p className="festival-month">April</p>
                <p>Traditional games, customs, and rituals</p>
                <span className="festival-preview-price">From $650</span>
              </div>
            </div>

            <div className="festival-preview-card">
              <div className="festival-preview-image">
                <img src="https://images.unsplash.com/photo-1528991435120-e73e05a58897?w=500" alt="Vesak" />
              </div>
              <div className="festival-preview-content">
                <span className="festival-emoji">🏮</span>
                <h3>Vesak Festival</h3>
                <p className="festival-month">May</p>
                <p>Illuminated pandals and spiritual beauty</p>
                <span className="festival-preview-price">From $580</span>
              </div>
            </div>

            <div className="festival-preview-card">
              <div className="festival-preview-image">
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500" alt="Kite Festival" />
              </div>
              <div className="festival-preview-content">
                <span className="festival-emoji">🪁</span>
                <h3>Kite Festival</h3>
                <p className="festival-month">August-September</p>
                <p>Colorful kites and coastal celebrations</p>
                <span className="festival-preview-price">From $320</span>
              </div>
            </div>

            <div className="festival-preview-card">
              <div className="festival-preview-image">
                <img src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=500" alt="Christmas" />
              </div>
              <div className="festival-preview-content">
                <span className="festival-emoji">🎄</span>
                <h3>Christmas Celebrations</h3>
                <p className="festival-month">December</p>
                <p>Festive traditions and family gatherings</p>
                <span className="festival-preview-price">From $480</span>
              </div>
            </div>
          </div>

          <div className="preview-cta">
            <Link to="/cultural-festivals" className="btn btn-primary">View All Festival Packages</Link>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="shop-section">
        <div className="container">
          <h2 className="section-title">Shop Photography Items & Decorations</h2>
          <p className="section-subtitle">Premium photo frames, equipment, birthday suits, and decorations</p>
          
          <div className="shop-grid">
            <div className="shop-item">
              <div className="shop-item-image">
                <img src="https://images.unsplash.com/photo-1596727147700-6a0db6fb5a09?w=600" alt="Premium Photo Frame" />
              </div>
              <div className="shop-item-content">
                <h3>Premium Photo Frames</h3>
                <p>Elegant wooden and metal frames to showcase your beautiful memories</p>
                <Link to="/shop" className="btn btn-primary">View Frames</Link>
              </div>
            </div>

            <div className="shop-item">
              <div className="shop-item-image">
                <img src="https://images.unsplash.com/photo-1504150554257-6f5c97f00d8d?w=600" alt="Photo Equipment" />
              </div>
              <div className="shop-item-content">
                <h3>Photo Equipment</h3>
                <p>Professional cameras, lenses, and accessories for perfect shots</p>
                <Link to="/shop" className="btn btn-primary">View Equipment</Link>
              </div>
            </div>

            <div className="shop-item">
              <div className="shop-item-image">
                <img src="https://images.unsplash.com/photo-1558591718-50d1b53d1d10?w=600" alt="Birthday Suits" />
              </div>
              <div className="shop-item-content">
                <h3>Birthday Suits & Decorations</h3>
                <p>Complete packages for memorable birthday celebrations</p>
                <Link to="/shop" className="btn btn-primary">View Birthday Items</Link>
              </div>
            </div>

            <div className="shop-item">
              <div className="shop-item-image">
                <img src="https://images.unsplash.com/photo-1528991435120-e73e05a58897?w=600" alt="Festival Decorations" />
              </div>
              <div className="shop-item-content">
                <h3>Festival Decorations</h3>
                <p>Traditional and modern decorations for cultural celebrations</p>
                <Link to="/shop" className="btn btn-primary">View Decorations</Link>
              </div>
            </div>
          </div>

          <div className="shop-cta">
            <Link to="/shop" className="btn btn-primary">View All Shop Items</Link>
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
