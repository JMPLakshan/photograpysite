import { Link } from 'react-router-dom';
import './PhotoTours.css';

function PhotoTours() {
  const tourPackages = [
    {
      id: 1,
      destination: 'Sigiriya Rock Fortress',
      location: 'Central Province, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800',
      description: 'Capture the ancient wonder of Sigiriya, a UNESCO World Heritage Site. Photograph the magnificent rock fortress, ancient frescoes, and stunning panoramic views.',
      highlights: [
        'Sunrise/Sunset photography sessions',
        'Ancient palace ruins and gardens',
        'Panoramic views from the summit',
        'Local village culture shots',
        'Professional guidance throughout'
      ],
      duration: 'Full Day (8 hours)',
      included: [
        '300+ edited high-resolution photos',
        'Professional photographer & guide',
        'Transportation from Colombo',
        'Entrance fees included',
        'Breakfast & lunch provided',
        'Online gallery access'
      ],
      price: '$450',
      bestTime: 'Year-round, Best: Dec-Mar'
    },
    {
      id: 2,
      destination: 'Hikkaduwa Beach',
      location: 'Southern Coast, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      description: 'Experience tropical paradise photography at Hikkaduwa Beach. Crystal clear waters, golden sands, and vibrant coral reefs create the perfect backdrop.',
      highlights: [
        'Beach sunset photography',
        'Underwater coral reef shots',
        'Traditional stilt fishing scenes',
        'Surfing action photography',
        'Beachside lifestyle captures'
      ],
      duration: 'Full Day (8 hours)',
      included: [
        '250+ edited photos',
        'Underwater photography equipment',
        'Beach props and accessories',
        'Professional photographer',
        'Coastal transportation',
        'Refreshments included'
      ],
      price: '$380',
      bestTime: 'Nov-Apr for best weather'
    },
    {
      id: 3,
      destination: 'Nuwara Eliya',
      location: 'Central Highlands, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800',
      description: 'Discover "Little England" with its lush tea plantations, colonial architecture, and misty mountains. Perfect for romantic and scenic photography.',
      highlights: [
        'Tea plantation photography',
        'Colonial-era buildings',
        'Gregory Lake scenic views',
        'Misty mountain landscapes',
        'Tea factory cultural experience'
      ],
      duration: 'Full Day (10 hours)',
      included: [
        '400+ edited photos',
        'Hill country transportation',
        'Tea estate visit & tasting',
        'Professional photographer',
        'All meals included',
        'Warm clothing if needed'
      ],
      price: '$420',
      bestTime: 'Jan-Mar, Jul-Aug ideal'
    },
    {
      id: 4,
      destination: 'Ella Rock & Nine Arch Bridge',
      location: 'Ella, Uva Province',
      image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800',
      description: 'Hike through tea plantations and capture the iconic Nine Arch Bridge with passing trains, plus breathtaking views from Ella Rock.',
      highlights: [
        'Nine Arch Bridge with trains',
        'Ella Rock sunrise trek',
        'Tea plantation walks',
        'Mountain valley panoramas',
        'Adventure photography'
      ],
      duration: 'Full Day (9 hours)',
      included: [
        '350+ edited photos',
        'Hiking guide & photographer',
        'Train journey experience',
        'Light hiking equipment',
        'Packed breakfast & lunch',
        'Transportation included'
      ],
      price: '$395',
      bestTime: 'Dec-Mar, Jul-Sep best'
    },
    {
      id: 5,
      destination: 'Galle Fort',
      location: 'Southern Province, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1599802171806-f31c44c31b75?w=800',
      description: 'Explore 17th-century Dutch colonial architecture, historic ramparts, and charming streets in this UNESCO World Heritage Site by the sea.',
      highlights: [
        'Colonial architecture shots',
        'Fort ramparts sunset views',
        'Historic lighthouse photography',
        'Cobblestone streets & cafes',
        'Ocean waves at fort walls'
      ],
      duration: 'Half Day (5 hours)',
      included: [
        '200+ edited photos',
        'Walking tour with photographer',
        'Historical insights',
        'Entrance to museums',
        'Refreshments',
        'Evening golden hour session'
      ],
      price: '$280',
      bestTime: 'Year-round destination'
    },
    {
      id: 6,
      destination: 'Yala National Park Safari',
      location: 'Southeast Sri Lanka',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800',
      description: 'Wildlife photography adventure in one of Asia\'s best leopard habitats. Capture elephants, leopards, sloth bears, and exotic birds.',
      highlights: [
        'Leopard & elephant photography',
        'Exotic bird species',
        'Safari jeep experience',
        'Sunrise/sunset game drives',
        'Professional wildlife guidance'
      ],
      duration: 'Full Day Safari',
      included: [
        '300+ wildlife photos',
        'Professional safari photographer',
        '4x4 safari vehicle',
        'Park entrance fees',
        'Breakfast & packed lunch',
        'Telephoto lens equipment'
      ],
      price: '$520',
      bestTime: 'Feb-Jul for wildlife'
    },
    {
      id: 7,
      destination: 'Kandy Cultural Tour',
      location: 'Central Province, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
      description: 'Photograph the sacred Temple of the Tooth, traditional Kandyan dance, and the serene Kandy Lake in Sri Lanka\'s cultural capital.',
      highlights: [
        'Temple of the Tooth Relic',
        'Traditional Kandyan dance performance',
        'Royal Botanical Gardens',
        'Kandy Lake scenic views',
        'Cultural ceremony photography'
      ],
      duration: 'Full Day (8 hours)',
      included: [
        '300+ cultural photos',
        'Cultural guide & photographer',
        'Temple entrance fees',
        'Dance performance tickets',
        'Transportation & meals',
        'Traditional costume props'
      ],
      price: '$385',
      bestTime: 'Esala Perahera (Jul-Aug) special'
    },
    {
      id: 8,
      destination: 'Mirissa Whale Watching',
      location: 'South Coast, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      description: 'Ocean adventure photographing blue whales, dolphins, and sea turtles in their natural habitat. An unforgettable marine experience.',
      highlights: [
        'Blue whale photography',
        'Dolphin pods in action',
        'Sea turtle encounters',
        'Ocean sunrise shots',
        'Marine life documentation'
      ],
      duration: 'Half Day (6 hours)',
      included: [
        '200+ marine photos',
        'Whale watching boat tour',
        'Marine photographer specialist',
        'Seasickness prevention',
        'Waterproof equipment',
        'Light breakfast included'
      ],
      price: '$350',
      bestTime: 'Nov-Apr for whales'
    }
  ];

  return (
    <div className="phototours-page">
      {/* Hero Section */}
      <section className="phototours-hero">
        <div className="phototours-hero-overlay">
          <div className="phototours-hero-content">
            <h1>📸 Photography Tour Packages</h1>
            <p>Capture Sri Lanka's Beauty with Professional Photography</p>
            <p className="hero-subtitle">Explore iconic destinations with expert photographers</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="phototours-intro">
        <div className="container">
          <h2>Discover Sri Lanka Through Your Lens</h2>
          <p className="intro-text">
            Experience the pearl of the Indian Ocean with our exclusive photography tour packages. 
            Whether you're a tourist from Sri Lanka or abroad, we combine professional photography 
            services with unforgettable travel experiences. Every package includes a dedicated 
            photographer to capture your journey at Sri Lanka's most stunning locations.
          </p>
          <div className="intro-features">
            <div className="intro-feature">
              <span className="feature-icon">🌏</span>
              <h3>Local & International Tourists</h3>
              <p>Perfect for everyone exploring Sri Lanka</p>
            </div>
            <div className="intro-feature">
              <span className="feature-icon">📷</span>
              <h3>Professional Photography</h3>
              <p>Expert photographers at every location</p>
            </div>
            <div className="intro-feature">
              <span className="feature-icon">🎁</span>
              <h3>All-Inclusive Packages</h3>
              <p>Transportation, meals, and memories included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="phototours-packages">
        <div className="container">
          <h2 className="section-title">Our Destination Packages</h2>
          
          <div className="tours-grid">
            {tourPackages.map(tour => (
              <div key={tour.id} className="tour-card">
                <div className="tour-image">
                  <img src={tour.image} alt={tour.destination} />
                  <div className="tour-badge">{tour.duration}</div>
                </div>
                
                <div className="tour-content">
                  <div className="tour-header">
                    <h3>{tour.destination}</h3>
                    <p className="tour-location">📍 {tour.location}</p>
                  </div>
                  
                  <p className="tour-description">{tour.description}</p>
                  
                  <div className="tour-highlights">
                    <h4>📌 Highlights:</h4>
                    <ul>
                      {tour.highlights.map((highlight, index) => (
                        <li key={index}>✓ {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="tour-included">
                    <h4>📦 Package Includes:</h4>
                    <ul>
                      {tour.included.map((item, index) => (
                        <li key={index}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="tour-footer">
                    <div className="tour-info">
                      <span className="tour-time">🗓️ {tour.bestTime}</span>
                      <span className="tour-price">{tour.price}</span>
                    </div>
                    <Link to="/contact" className="tour-book-btn">Book This Tour</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="phototours-benefits">
        <div className="container">
          <h2>Why Book Photo Tours with Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">👨‍💼</span>
              <h3>Expert Local Photographers</h3>
              <p>Professional photographers who know the best spots and perfect timing</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🚗</span>
              <h3>Hassle-Free Travel</h3>
              <p>All transportation, entrance fees, and logistics handled for you</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">📸</span>
              <h3>Professional Equipment</h3>
              <p>High-end cameras and specialized equipment for every situation</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">⚡</span>
              <h3>Fast Delivery</h3>
              <p>Receive your professionally edited photos within 2 weeks</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🌐</span>
              <h3>Multilingual Guides</h3>
              <p>English, Sinhala, and Tamil speaking photographers available</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">💯</span>
              <h3>Satisfaction Guaranteed</h3>
              <p>100% satisfaction or we'll reshoot at no extra cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="phototours-cta">
        <div className="container">
          <h2>Ready to Explore & Capture Sri Lanka?</h2>
          <p>Book your photography tour package today and create memories that last forever!</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary">Book Your Tour</Link>
            <Link to="/gallery" className="cta-btn secondary">View Our Gallery</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PhotoTours;
