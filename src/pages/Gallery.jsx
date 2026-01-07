import { useState } from 'react';
import weddingPhoto1 from '/src/assets/wedding/477036572_592472673685547_4575481749665268043_n.jpg';
import weddingPhoto2 from '/src/assets/wedding/477098879_592472433685571_1732294956173565579_n.jpg';
import weddingPhoto3 from '/src/assets/wedding/477217700_592472713685543_9131144071558424404_n.jpg';
import weddingPhoto4 from '/src/assets/wedding/476931687_592472347018913_8343765868883073735_n.jpg';
import './Gallery.css';

function Gallery() {
  const [filter, setFilter] = useState('all');

  const photos = [
    { id: 1, category: 'wedding', url: weddingPhoto1, title: 'Beautiful Wedding Ceremony' },
    { id: 2, category: 'wedding', url: weddingPhoto2, title: 'Romantic Wedding Moment' },
    { id: 3, category: 'wedding', url: weddingPhoto3, title: 'Wedding Celebration' },
    {id:13, category:'wedding',url:weddingPhoto4,title:'Bride and Groom' },
    { id: 4, category: 'portrait', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', title: 'Portrait Session' },
    { id: 5, category: 'landscape', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Mountain View' },
    { id: 6, category: 'event', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', title: 'Event Coverage' },
    { id: 7, category: 'portrait', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', title: 'Studio Portrait' },
    { id: 8, category: 'landscape', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Sunset Landscape' },
    { id: 9, category: 'wedding', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', title: 'Wedding Reception' },
    { id: 10, category: 'event', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', title: 'Corporate Event' },
    { id: 11, category: 'portrait', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800', title: 'Professional Headshot' },
    { id: 12, category: 'landscape', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', title: 'Nature Photography' },
    { id: 13, category: 'wedding', url: 'https://images.unsplash.com/photo-1525258447116-d0fde9c0b9dc?w=800', title: 'Wedding Couple' }
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
