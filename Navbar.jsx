import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 shadow">
      <Link to="/" className="text-2xl font-bold text-white">BYFORT</Link>
      <div className="space-x-4 text-sm">
        <Link to="/upload" className="hover:underline">Upload</Link>
        <Link to="/search" className="hover:underline">Search</Link>
        <Link to="/music" className="hover:underline">Music</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}