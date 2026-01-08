import { Link } from 'react-router-dom';
import productImage1 from '/src/assets/Featured Products/shop1.jpg';
import productImage2 from '/src/assets/Featured Products/shop2.jpg';
import productImage3 from '/src/assets/Featured Products/shop3.jpg';
import productImage4 from '/src/assets/Featured Products/shop4.jpg';
import productImage5 from '/src/assets/Featured Products/shop5.jpg';
import productImage6 from '/src/assets/Featured Products/shop6.jpg';
import shopHomeImage from '/src/assets/Featured Products/shophome.jpg';
import './Shop.css';
import './Home.css'; // Importing Home.css for consistent styling

function Shop() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Premium Photo Frame',
      description: 'Elegant wooden frame perfect for displaying your cherished memories',
      price: '$29.99',
      image: productImage1,
      category: 'Frames'
    },
    {
      id: 2,
      name: 'Vintage Camera',
      description: 'Classic camera for photography enthusiasts and collectors',
      price: '$149.99',
      image: productImage2,
      category: 'Photo Equipment'
    },
    {
      id: 3,
      name: 'Birthday Suit Package',
      description: 'Complete birthday celebration package with decorations and props',
      price: '$89.99',
      image: productImage3,
      category: 'Party Items'
    },
    {
      id: 4,
      name: 'Lighting Kit',
      description: 'Professional lighting equipment for perfect photo shoots',
      price: '$199.99',
      image: productImage4,
      category: 'Photo Equipment'
    },
    {
      id: 5,
      name: 'Festival Decorations',
      description: 'Traditional Sri Lankan festival decorations for cultural celebrations',
      price: '$45.99',
      image: productImage5,
      category: 'Decorations'
    },
    {
      id: 6,
      name: 'Photo Album',
      description: 'Premium quality photo album to preserve your memories',
      price: '$39.99',
      image: productImage6,
      category: 'Storage'
    }
  ];

  return (
    <div className="shop">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img src={shopHomeImage} alt="Our Shop" />
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Our Shop</h1>
            <p className="hero-subtitle">Discover premium photography items and accessories</p>
          </div>
        </div>
      </section>

      {/* Shop Intro Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Photography & Celebration Essentials</h2>
          <p className="section-text">
            From premium photo frames to professional equipment and celebration essentials, 
            we offer high-quality items to enhance your photography experience and make your 
            special moments even more memorable.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">{product.price}</div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Find Perfect Items for Your Needs</h2>
          <p>Quality products for photography enthusiasts and celebration organizers</p>
          <Link to="/contact" className="btn btn-cta">Contact Us for Custom Orders</Link>
        </div>
      </section>
    </div>
  );
}

export default Shop;