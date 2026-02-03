import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

/* ── Data for the 8 days ── */
const DAYS = [
  { date: '7 Feb', name: 'Rose Day',       emoji: '🌹', route: '/rose-day',       color: 'from-red-400 to-rose-500',       bg: 'bg-red-50' },
  { date: '8 Feb', name: 'Proposal Day',   emoji: '💍', route: '/proposal-day',   color: 'from-purple-400 to-fuchsia-500', bg: 'bg-purple-50' },
  { date: '9 Feb', name: 'Chocolate Day',  emoji: '🍫', route: '/chocolate-day',  color: 'from-amber-500 to-orange-500',   bg: 'bg-amber-50' },
  { date: '10 Feb',name: 'Teddy Day',      emoji: '🧸', route: '/teddy-day',      color: 'from-yellow-400 to-amber-400',   bg: 'bg-yellow-50' },
  { date: '11 Feb',name: 'Promise Day',    emoji: '🕊️', route: '/promise-day',    color: 'from-sky-400 to-cyan-500',       bg: 'bg-sky-50' },
  { date: '12 Feb',name: 'Hug Day',        emoji: '🤗', route: '/hug-day',        color: 'from-green-400 to-emerald-500',  bg: 'bg-green-50' },
  { date: '13 Feb',name: 'Kiss Day',       emoji: '💋', route: '/kiss-day',       color: 'from-pink-400 to-rose-500',      bg: 'bg-pink-50' },
  { date: '14 Feb',name: "Valentine's Day",emoji: '💝', route: '/valentines-day', color: 'from-rose-500 to-red-500',       bg: 'bg-rose-50' },
];

function Home({ userName, setUserName }) { // <--- 1. Receive setUserName prop

  // 2. Logic to logout/reset name
  const handleLogout = () => {
    sessionStorage.removeItem('valentineName'); // Clear browser storage
    setUserName(''); // Clear App state (triggers redirect to Welcome)
  };

  return (
    <div className="min-h-screen relative z-10">
      <Navbar userName={userName} />

      {/* 3. New Logout Button (Top Right) */}
      <button 
        onClick={handleLogout}
        className="absolute bottom-6 left-6 z-50 
             bg-white/40 hover:bg-white/80 text-pink-700 
             px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold 
             backdrop-blur-sm transition-all shadow-sm border border-pink-100"
      >
        Go Back ↺
      </button>

      <div className="max-w-2xl mx-auto px-4 pt-24 pb-16">
        {/* Greeting block */}
        <div className="text-center animate-fadeInUp mb-10">
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-1">Welcome back</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hi, <span className="text-rose-500 italic">{userName}</span> 💕
          </h1>
          <p className="text-gray-500 text-base">
            Let's take a tour of Valentine Week ✨
          </p>

          {/* Small divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-8 bg-pink-200" />
            <span className="text-pink-300 text-sm">💗</span>
            <div className="h-px w-8 bg-pink-200" />
          </div>
        </div>

        {/* Day cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DAYS.map((day, i) => (
            <Link
              key={day.route}
              to={day.route}
              className={`glass-card rounded-2xl p-4 flex items-center gap-4
                          hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                          animate-fadeInUp ${day.bg}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Emoji circle */}
              <div className={`w-14 h-14 shrink-0 rounded-2xl bg-linear-to-br ${day.color}
                              flex items-center justify-center text-2xl shadow-md`}>
                {day.emoji}
              </div>

              {/* Text */}
              <div className="text-left">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{day.date}</p>
                <h3 className="text-base font-bold text-gray-700" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {day.name}
                </h3>
              </div>

              {/* Arrow */}
              <span className="ml-auto text-pink-300 text-lg">→</span>
            </Link>
          ))}
        </div>

        {/* Leave a note CTA */}
        <div className="mt-10 text-center animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <Link
            to="/leave-note?day=Valentine%20Week"
            className="inline-block px-6 py-3 rounded-2xl border-2 border-pink-300 text-pink-600 font-semibold
                       hover:bg-pink-50 hover:border-pink-400 transition-all duration-300"
          >
            ✉️ Leave a Note for the whole week
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;