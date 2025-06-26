import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/add" style={{ marginRight: '15px' }}>Add Podcast</Link>
      <Link to="/login" style={{ marginRight: '15px' }}>Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}