import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ userName }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide navbar on welcome page
  if (location.pathname === '/') return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 glass-card border-b border-pink-100 px-4 py-3 flex items-center justify-between">
      {/* Logo / Home link */}
      <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <span className="text-xl">💗</span>
        <span className="text-sm font-bold text-pink-600" style={{ fontFamily: "'Playfair Display', serif" }}>
          Valentine Week
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden sm:flex items-center gap-4">
        {userName && (
          <span className="text-xs text-pink-400 font-semibold">
            Hi {userName} 💕
          </span>
        )}
        <Link
          to="/home"
          className="text-xs font-semibold text-pink-500 hover:text-pink-700 transition-colors"
        >
          🏠 Home
        </Link>
        <Link
          to={`/leave-note?day=${encodeURIComponent(getDayFromPath(location.pathname))}`}
          className="text-xs font-semibold bg-pink-100 text-pink-600 px-3 py-1 rounded-full hover:bg-pink-200 transition-colors"
        >
          ✉️ Leave a Note
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden text-pink-500 text-xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-pink-100 shadow-lg px-4 py-3 flex flex-col gap-2 sm:hidden">
          {userName && (
            <span className="text-xs text-pink-400 font-semibold">Hi {userName} 💕</span>
          )}
          <Link to="/home" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-pink-600">
            🏠 Home
          </Link>
          <Link
            to={`/leave-note?day=${encodeURIComponent(getDayFromPath(location.pathname))}`}
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold text-pink-600"
          >
            ✉️ Leave a Note
          </Link>
        </div>
      )}
    </nav>
  );
}

/* Helper: turn /chocolate-day → "Chocolate Day" */
function getDayFromPath(path) {
  const map = {
    '/rose-day': 'Rose Day',
    '/proposal-day': 'Proposal Day',
    '/chocolate-day': 'Chocolate Day',
    '/teddy-day': 'Teddy Day',
    '/promise-day': 'Promise Day',
    '/hug-day': 'Hug Day',
    '/kiss-day': 'Kiss Day',
    '/valentines-day': "Valentine's Day",
  };
  return map[path] || 'Valentine Week';
}

export default Navbar;