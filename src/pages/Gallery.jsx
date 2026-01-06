import { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [filter, setFilter] = useState('all');

  const photos = [
    { id: 1, category: 'wedding', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', title: 'Wedding Ceremony' },
    { id: 2, category: 'portrait', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', title: 'Portrait Session' },
    { id: 3, category: 'landscape', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Mountain View' },
    { id: 4, category: 'wedding', url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800', title: 'Wedding Details' },
    { id: 5, category: 'event', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', title: 'Event Coverage' },
    { id: 6, category: 'portrait', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', title: 'Studio Portrait' },
    { id: 7, category: 'landscape', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Sunset Landscape' },
    { id: 8, category: 'wedding', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', title: 'Wedding Reception' },
    { id: 9, category: 'event', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', title: 'Corporate Event' },
    { id: 10, category: 'portrait', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800', title: 'Professional Headshot' },
    { id: 11, category: 'landscape', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', title: 'Nature Photography' },
    { id: 12, category: 'wedding', url: 'https://images.unsplash.com/photo-1525258447116-d0fde9c0b9dc?w=800', title: 'Wedding Couple' }
  ];

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <h1>Our Portfolio</h1>
        <p>Explore our collection of stunning photography</p>
      </div>

      <div className="gallery-container">
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'wedding' ? 'active' : ''} 
            onClick={() => setFilter('wedding')}
          >
            Weddings
          </button>
          <button 
            className={filter === 'portrait' ? 'active' : ''} 
            onClick={() => setFilter('portrait')}
          >
            Portraits
          </button>
          <button 
            className={filter === 'event' ? 'active' : ''} 
            onClick={() => setFilter('event')}
          >
            Events
          </button>
          <button 
            className={filter === 'landscape' ? 'active' : ''} 
            onClick={() => setFilter('landscape')}
          >
            Landscapes
          </button>
        </div>

        <div className="gallery-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="gallery-item">
              <img src={photo.url} alt={photo.title} />
              <div className="gallery-overlay">
                <h3>{photo.title}</h3>
                <p className="category-tag">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="no-results">
            <p>No photos found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
