import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '💍',
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage capturing every precious moment from preparation to reception',
      features: [
        'Full day coverage (8-12 hours)',
        'Two professional photographers',
        'Engagement session included',
        '500+ edited high-resolution photos',
        'Online gallery with download',
        'Premium wedding album',
        'Highlight video (optional)'
      ],
      startingPrice: '$999'
    },
    {
      id: 2,
      icon: '👨‍👩‍👧‍👦',
      title: 'Portrait Photography',
      description: 'Professional portraits for individuals, families, and corporate headshots',
      features: [
        '1-2 hour session',
        'Multiple outfit changes',
        'Location of your choice',
        '50+ edited photos',
        'Print-ready files',
        'Online gallery',
        'Professional retouching'
      ],
      startingPrice: '$299'
    },
    {
      id: 3,
      icon: '🎉',
      title: 'Event Photography',
      description: 'Coverage for corporate events, parties, conferences, and special occasions',
      features: [
        'Flexible hour packages',
        'On-site photo delivery',
        'Candid and posed shots',
        'Unlimited photos',
        'Quick turnaround time',
        'Event highlights video',
        'Group photos included'
      ],
      startingPrice: '$499'
    },
    {
      id: 4,
      icon: '🏢',
      title: 'Commercial Photography',
      description: 'Professional imagery for businesses, products, and promotional campaigns',
      features: [
        'Product photography',
        'Corporate headshots',
        'Business promotional shots',
        'Brand photography',
        'Social media content',
        'Commercial licensing',
        'Fast delivery'
      ],
      startingPrice: '$599'
    },
    {
      id: 5,
      icon: '🏞️',
      title: 'Landscape & Architecture',
      description: 'Stunning photographs of landscapes, properties, and architectural marvels',
      features: [
        'Real estate photography',
        'Architectural shots',
        'Interior photography',
        'Aerial drone shots',
        'HDR processing',
        'Virtual tours',
        'Twilight photography'
      ],
      startingPrice: '$399'
    },
    {
      id: 6,
      icon: '👶',
      title: 'Newborn & Maternity',
      description: 'Gentle and artistic photography for expecting mothers and newborns',
      features: [
        'Studio or home session',
        'Props and accessories provided',
        'Safe posing techniques',
        '2-3 hour session',
        '40+ edited photos',
        'Fine art editing',
        'Maternity gowns available'
      ],
      startingPrice: '$349'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="animated-title">Our Photography Services</h1>
          <p className="animated-subtitle">Professional photography tailored to your needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-container">
        <div className="container">
          <div className="services-intro">
            <h2 className="animated-title">What We Offer</h2>
            <p className="animated-subtitle">
              From intimate moments to grand celebrations, we provide comprehensive photography 
              services with professional quality and personalized attention to detail.
            </p>
          </div>

          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-detail-card">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                
                <div className="service-price">
                  <span>Starting from</span>
                  <h4>{service.startingPrice}</h4>
                </div>
                
                <Link to="/contact" className="service-btn">Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="animated-title">Why Choose BotherHood Photography?</h2>
          <div className="features-grid">
            <div className="feature-item animated-feature">
              <div className="feature-icon">⭐</div>
              <h3>Professional Quality</h3>
              <p>State-of-the-art equipment and expert photographers</p>
            </div>
            <div className="feature-item animated-feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Receive your edited photos within 2-3 weeks</p>
            </div>
            <div className="feature-item animated-feature">
              <div className="feature-icon">💝</div>
              <h3>Personalized Service</h3>
              <p>Tailored packages to match your specific needs</p>
            </div>
            <div className="feature-item animated-feature">
              <div className="feature-icon">🎨</div>
              <h3>Creative Excellence</h3>
              <p>Artistic vision combined with technical expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2 className="animated-title">Ready to Capture Your Moments?</h2>
          <p className="animated-subtitle">Let's discuss your photography needs and create something beautiful together</p>
          <Link to="/contact" className="cta-button animated-button">Get a Free Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
