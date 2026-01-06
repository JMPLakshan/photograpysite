import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>
        <p className="error-subtitle">It might have been moved or deleted.</p>
        <Link to="/" className="home-button">Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
