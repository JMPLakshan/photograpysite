import React from 'react';
import festivalImage1 from '/src/assets/Festival/festival1.jpg';
import festivalImage2 from '/src/assets/Festival/festival2.jpg';
import festivalImage3 from '/src/assets/Festival/festival3.jpg';
import festivalImage4 from '/src/assets/Festival/festival4.jpg';
import festivalImage5 from '/src/assets/Festival/festival5.jpg';
import festivalImage6 from '/src/assets/Festival/festival6.jpg';
import festivalImage7 from '/src/assets/Festival/festival7.jpg';
import festivalImage8 from '/src/assets/Festival/festival8.jpg';
import './CulturalFestivals.css';

function CulturalFestivals() {
  const festivalPackages = [
    {
      id: 1,
      festival: 'Sinhala & Tamil New Year',
      month: 'April',
      emoji: '🎊',
      image: festivalImage1,
      description: 'Capture the vibrant traditions and rituals of the Sinhala and Tamil New Year celebrations. From traditional games to customary rituals, we document the essence of this joyous occasion.',
      highlights: [
        'Traditional New Year games (Kotta Pora, Pillow Fight, etc.)',
        'Aluth Avurudda customs and rituals',
        'Traditional costume photography',
        'Family gathering moments',
        'Traditional food preparation',
        'Lighting the hearth ceremony',
        'First transaction ritual',
        'Oil lamp lighting'
      ],
      duration: '2 Days Coverage',
      included: [
        '500+ edited high-resolution photos',
        'Traditional costume photoshoot',
        'Ritual documentation',
        'Family portraits in traditional attire',
        'Cultural activity coverage',
        'Online gallery within 10 days',
        'Print-ready files',
        'Cultural narration guide'
      ],
      price: '$650',
      bestTime: 'Mid-April (13th-14th)',
      culturalNote: 'Experience the most important cultural celebration in Sri Lanka'
    },
    {
      id: 2,
      festival: 'Vesak Festival',
      month: 'May',
      emoji: '🏮',
      image: festivalImage2,
      description: 'Document the spiritual beauty of Vesak, the most sacred Buddhist festival. Capture illuminated pandals, dansal (alms giving), and the serene atmosphere of devotion.',
      highlights: [
        'Illuminated Vesak lanterns and pandals',
        'Dansal (free food distribution) scenes',
        'Temple decorations and Buddha statues',
        'Devotees in white attire',
        'Traditional oil lamps',
        'Street decorations and lighting',
        'Cultural performances',
        'Night photography of illuminations'
      ],
      duration: 'Full Day + Evening (10 hours)',
      included: [
        '400+ edited high-resolution photos',
        'Day and night coverage',
        'Pandal detailed photography',
        'Spiritual moments capture',
        'Crowd and cultural documentation',
        'Online gallery within 7 days',
        'Time-lapse of illuminations',
        'Cultural context notes'
      ],
      price: '$580',
      bestTime: 'Vesak Poya Day (May Full Moon)',
      culturalNote: 'Witness streets transformed into galleries of light and devotion'
    },
    {
      id: 3,
      festival: 'Kite Festival Season',
      month: 'August-September',
      emoji: '🪁',
      image: festivalImage3,
      description: 'Capture the colorful spectacle of kite flying season, especially popular in coastal areas. Document the competitive spirit, traditional designs, and joyful atmosphere.',
      highlights: [
        'Colorful kites against blue skies',
        'Traditional kite designs',
        'Kite flying competitions',
        'Children and families flying kites',
        'Beach and coastal scenes',
        'Sunset kite photography',
        'Action shots of kite battles',
        'Cultural gathering moments'
      ],
      duration: 'Half Day (5 hours)',
      included: [
        '250+ edited high-resolution photos',
        'Action and motion photography',
        'Sky and landscape integration',
        'Family and group shots',
        'Detailed kite design photos',
        'Online gallery within 5 days',
        'Video clips of flying kites',
        'Best shots in panoramic format'
      ],
      price: '$320',
      bestTime: 'August-September (Windy Season)',
      culturalNote: 'A centuries-old tradition especially vibrant in Galle and coastal regions'
    },
    {
      id: 4,
      festival: 'Christmas Celebrations',
      month: 'December',
      emoji: '🎄',
      image: festivalImage4,
      description: 'Document the festive spirit of Christmas in Sri Lanka with unique local traditions, church services, decorations, and family celebrations.',
      highlights: [
        'Church midnight mass photography',
        'Traditional Sri Lankan Christmas decorations',
        'Family gathering moments',
        'Christmas cake and traditional sweets',
        'Carol singing and performances',
        'Nativity scenes',
        'Street decorations in Colombo',
        'Multi-cultural celebration moments'
      ],
      duration: 'Full Day + Evening (8 hours)',
      included: [
        '350+ edited high-resolution photos',
        'Church service documentation',
        'Family portrait sessions',
        'Decoration and festive atmosphere',
        'Traditional food photography',
        'Cultural integration shots',
        'Online gallery within 7 days',
        'Holiday greeting card designs'
      ],
      price: '$480',
      bestTime: 'December 24th-25th',
      culturalNote: 'Experience the unique blend of Western and Sri Lankan Christmas traditions'
    },
    {
      id: 5,
      festival: 'Kandy Esala Perahera',
      month: 'July-August',
      emoji: '🐘',
      image: festivalImage5,
      description: 'Capture one of Asia\'s most magnificent cultural pageants. Document the grand procession of decorated elephants, traditional dancers, and cultural performers.',
      highlights: [
        'Decorated elephants in procession',
        'Traditional Kandyan dancers',
        'Fire dancers and acrobats',
        'Temple of the Tooth backdrop',
        'Ceremonial drummers',
        'Traditional costumes and regalia',
        'Night procession with torches',
        'Cultural heritage documentation'
      ],
      duration: '2 Nights Coverage',
      included: [
        '600+ edited high-resolution photos',
        'VIP viewing position access',
        'Multiple night coverage',
        'Elephant close-up photography',
        'Dancer action shots',
        'Cultural performance documentation',
        'Online gallery within 14 days',
        'Documentary-style photo essay'
      ],
      price: '$850',
      bestTime: 'July-August (Esala Full Moon)',
      culturalNote: 'UNESCO recognized cultural masterpiece and religious festival'
    },
    {
      id: 6,
      festival: 'Poson Festival',
      month: 'June',
      emoji: '☸️',
      image: festivalImage6,
      description: 'Document the sacred Poson festival commemorating the arrival of Buddhism in Sri Lanka. Capture pilgrims at Mihintale and sacred ceremonies.',
      highlights: [
        'Mihintale temple pilgrimage',
        'Devotees in white attire',
        'Sacred ceremonies and rituals',
        'Temple illuminations',
        'Dansal and charity activities',
        'Ancient stupa photography',
        'Spiritual atmosphere capture',
        'Cultural heritage sites'
      ],
      duration: 'Full Day (8 hours)',
      included: [
        '300+ edited high-resolution photos',
        'Pilgrimage documentation',
        'Temple architecture photography',
        'Devotional moments capture',
        'Cultural landscape shots',
        'Online gallery within 7 days',
        'Spiritual journey photo story',
        'Historical site documentation'
      ],
      price: '$420',
      bestTime: 'June (Poson Poya Day)',
      culturalNote: 'Second most important Buddhist festival in Sri Lanka'
    },
    {
      id: 7,
      festival: 'Deepavali (Festival of Lights)',
      month: 'October-November',
      emoji: '🪔',
      image: festivalImage7,
      description: 'Capture the vibrant Tamil Hindu festival of lights. Document oil lamp lighting, rangoli designs, family celebrations, and temple visits.',
      highlights: [
        'Traditional oil lamp lighting',
        'Colorful rangoli designs',
        'Family celebrations and prayers',
        'Traditional sweets and foods',
        'Temple visits and ceremonies',
        'Traditional attire photography',
        'Fireworks and celebrations',
        'Cultural decoration details'
      ],
      duration: 'Full Day (7 hours)',
      included: [
        '280+ edited high-resolution photos',
        'Home celebration coverage',
        'Temple ceremony documentation',
        'Traditional preparation shots',
        'Family portrait session',
        'Cultural detail photography',
        'Online gallery within 5 days',
        'Festival greeting designs'
      ],
      price: '$380',
      bestTime: 'October-November (Auspicious Date)',
      culturalNote: 'Celebrate the triumph of light over darkness in Tamil tradition'
    },
    {
      id: 8,
      festival: 'Navam Perahera (Colombo)',
      month: 'February',
      emoji: '🎭',
      image: festivalImage8,
      description: 'Document the grand Buddhist procession in Colombo featuring elephants, dancers, and traditional performers at Gangaramaya Temple.',
      highlights: [
        'Decorated elephants parade',
        'Traditional Kandyan dancers',
        'Gangaramaya Temple backdrop',
        'Fire dancers and performers',
        'Urban cultural celebration',
        'Night photography of procession',
        'Traditional costume details',
        'Modern meets traditional moments'
      ],
      duration: 'Evening Coverage (6 hours)',
      included: [
        '350+ edited high-resolution photos',
        'Procession route coverage',
        'Elephant photography',
        'Cultural performance shots',
        'Urban festival atmosphere',
        'Online gallery within 7 days',
        'Action and motion captures',
        'Cultural documentation notes'
      ],
      price: '$450',
      bestTime: 'February (Navam Poya)',
      culturalNote: 'Colombo\'s most colorful religious and cultural celebration'
    }
  ];

  return (
    <div className="cultural-festivals-page">
      {/* Hero Section */}
      <section className="festivals-hero">
        <div className="festivals-hero-overlay"></div>
        <div className="festivals-hero-content">
          <h1 className="festivals-hero-title">Cultural Festivals Photography</h1>
          <p className="festivals-hero-subtitle">
            Capture the Rich Traditions and Vibrant Celebrations of Sri Lanka
          </p>
          <p className="festivals-hero-description">
            Document authentic cultural moments, traditional rituals, and festive celebrations throughout the year
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="festivals-intro">
        <div className="container">
          <h2 className="section-title">Experience Sri Lankan Culture Through Your Lens</h2>
          <p className="section-description">
            Sri Lanka is a land of diverse cultures and vibrant festivals throughout the year. From Buddhist and Hindu 
            celebrations to Christian traditions and unique cultural events, our professional photographers help you 
            capture the essence, colors, rituals, and emotions of these special occasions. Whether you want to document 
            your family traditions or experience authentic cultural moments, we provide comprehensive photography packages 
            tailored to each festival.
          </p>
        </div>
      </section>

      {/* Festival Packages Grid */}
      <section className="festivals-packages">
        <div className="container">
          <h2 className="section-title">Festival Photography Packages</h2>
          <div className="festivals-grid">
            {festivalPackages.map((festival) => (
              <div key={festival.id} className="festival-card">
                <div className="festival-image">
                  <img src={festival.image} alt={festival.festival} />
                </div>
                <div className="festival-header">
                  <span className="festival-emoji">{festival.emoji}</span>
                  <div className="festival-title-group">
                    <h3 className="festival-name">{festival.festival}</h3>
                    <span className="festival-month">{festival.month}</span>
                  </div>
                </div>
                
                <p className="festival-description">{festival.description}</p>
                
                <div className="festival-highlights">
                  <h4>Photography Highlights:</h4>
                  <ul>
                    {festival.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="festival-details">
                  <div className="detail-item">
                    <strong>Duration:</strong> {festival.duration}
                  </div>
                  <div className="detail-item">
                    <strong>Best Time:</strong> {festival.bestTime}
                  </div>
                </div>
                
                <div className="festival-included">
                  <h4>Package Includes:</h4>
                  <ul>
                    {festival.included.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="festival-cultural-note">
                  <p><strong>Cultural Note:</strong> {festival.culturalNote}</p>
                </div>
                
                <div className="festival-footer">
                  <span className="festival-price">{festival.price}</span>
                  <button className="festival-btn">Book This Package</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="festivals-why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Our Cultural Festival Photography?</h2>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">📸</div>
              <h3>Cultural Expertise</h3>
              <p>Our photographers understand the significance of each ritual and tradition, ensuring respectful and authentic documentation.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">🎨</div>
              <h3>Artistic Excellence</h3>
              <p>We capture the vibrant colors, emotions, and atmosphere that make each festival unique and memorable.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">⏰</div>
              <h3>Perfect Timing</h3>
              <p>We know the best moments to capture during each festival, from dawn rituals to evening illuminations.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">🌟</div>
              <h3>Complete Coverage</h3>
              <p>From preparation to conclusion, we document every important moment of your cultural celebration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="festivals-cta">
        <div className="container">
          <h2>Ready to Capture Your Cultural Celebration?</h2>
          <p>Book your festival photography package today and preserve your precious cultural moments forever.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">View All Packages</button>
            <button className="cta-btn secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CulturalFestivals;
