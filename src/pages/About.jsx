import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About BotherHood Photography</h1>
          <p>Capturing Memories, Creating Art, Telling Stories</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2018, BotherHood Photography began with a simple passion: to capture life's 
                most precious moments through the lens of artistry and emotion. What started as a dream 
                has blossomed into a full-service photography studio, trusted by hundreds of clients 
                across Sri Lanka.
              </p>
              <p>
                Our name "BotherHood" represents the bond we create with every client – treating each 
                project as if it were for our own family. We believe that great photography is not just 
                about technical perfection, but about connecting with people and understanding their stories.
              </p>
              <p>
                Today, we're proud to be one of the most sought-after photography studios, known for 
                our creative vision, professional approach, and commitment to excellence.
              </p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600" alt="Our Studio" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To create timeless photographs that capture authentic emotions and tell compelling 
                stories, preserving memories that will be cherished for generations.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading photography studio recognized for artistic excellence, innovative 
                techniques, and unparalleled client experiences.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Creativity, professionalism, authenticity, and dedication to capturing the perfect 
                moment that reflects your unique story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Talented photographers passionate about their craft</p>
          
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" alt="Team Member" />
              </div>
              <h3>David Anderson</h3>
              <p className="role">Lead Photographer & Founder</p>
              <p className="bio">15+ years of experience in wedding and portrait photography</p>
              <div className="social-links">
                <a href="#">📷</a>
                <a href="#">💼</a>
                <a href="#">🐦</a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" alt="Team Member" />
              </div>
              <h3>Sarah Mitchell</h3>
              <p className="role">Senior Photographer</p>
              <p className="bio">Specialist in event and lifestyle photography with 10 years experience</p>
              <div className="social-links">
                <a href="#">📷</a>
                <a href="#">💼</a>
                <a href="#">🐦</a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" alt="Team Member" />
              </div>
              <h3>Michael Chen</h3>
              <p className="role">Creative Director</p>
              <p className="bio">Award-winning photographer specializing in artistic compositions</p>
              <div className="social-links">
                <a href="#">📷</a>
                <a href="#">💼</a>
                <a href="#">🐦</a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400" alt="Team Member" />
              </div>
              <h3>Emily Rodriguez</h3>
              <p className="role">Portrait Specialist</p>
              <p className="bio">Expert in family portraits and newborn photography</p>
              <div className="social-links">
                <a href="#">📷</a>
                <a href="#">💼</a>
                <a href="#">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Awards Won</p>
            </div>
            <div className="stat-item">
              <h3>8+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
