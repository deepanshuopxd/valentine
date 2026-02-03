import { useState } from 'react';
import DayPageTemplate from '../components/DayPageTemplate';

const USER_PHOTOS = [
  { src: '', label: 'Photo 1' },
  { src: '', label: 'Photo 2' },
  { src: '', label: 'Photo 3' },
  { src: '', label: 'Photo 4' },
  { src: '', label: 'Photo 5' },
  { src: '', label: 'Photo 6' },
];

const VIDEOS = [
  { src: '', poster: '', caption: 'Video 1 — Your video here' },
  { src: '', poster: '', caption: 'Video 2 — Your video here' },
];

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1491491578545-98182c625608?w=400&q=80', alt: 'Valentine couple' },
  { src: 'https://images.unsplash.com/photo-1491746027182-23156dbaa22b?w=400&q=80', alt: 'Valentine hearts' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', alt: 'Valentine candles' },
];

/* ── "No" button keeps running away ── */
function RunawayNo({ onClick }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const dodge = () => {
    setPos({
      x: (Math.random() - 0.5) * 180,
      y: (Math.random() - 0.5) * 80,
    });
  };

  return (
    <button
      onClick={dodge}
      onMouseEnter={dodge}
      onTouchStart={dodge}
      className="px-5 py-2 rounded-full border-2 border-pink-300 text-pink-500 font-semibold text-sm
                 hover:bg-pink-50 transition-all duration-200 focus:outline-none"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, transition: 'transform 0.15s ease' }}
    >
      No… maybe later
    </button>
  );
}

/* ── Extra content: the big ask ── */
function ValentineAsk({ userName }) {
  const [answer, setAnswer] = useState(null); // null | 'yes' | 'no'

  if (answer === 'yes') {
    return (
      <div className="mt-8 glass-card rounded-2xl p-6 text-center animate-modalIn">
        <div className="text-6xl animate-heartbeat">🥰</div>
        <h3 className="text-xl font-bold text-pink-700 mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Yayy!! 🎉
        </h3>
        <p className="text-gray-500 mt-1">
          You just made this the best Valentine's Day ever, {userName}!
        </p>
        <div className="flex justify-center gap-2 mt-4 text-2xl">
          {['💝','🌹','💋','✨','💗','🎊','💫','🥰'].map((e, i) => (
            <span key={i} className="animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }}>{e}</span>
          ))}
        </div>
      </div>
    );
  }

  if (answer === 'no') {
    return (
      <div className="mt-8 glass-card rounded-2xl p-6 text-center animate-modalIn">
        <div className="text-5xl">😢</div>
        <p className="text-gray-500 mt-2">It's okay… I'll keep trying! 💕</p>
        <button
          onClick={() => setAnswer(null)}
          className="mt-3 px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold hover:bg-pink-200 transition-colors"
        >
          Ask me again →
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 glass-card rounded-2xl p-6 text-center animate-fadeInUp">
      <div className="text-5xl animate-heartbeat">💝</div>
      <h3 className="text-xl font-bold text-pink-700 mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
        Will you be my Valentine, {userName}?
      </h3>
      <p className="text-gray-400 text-sm mt-1">The most important question of Valentine Week…</p>

      <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
        <button
          onClick={() => setAnswer('yes')}
          className="px-7 py-2.5 rounded-full bg-linear-to-r from-pink-400 to-rose-500 text-white font-bold text-lg shadow-md
                     hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none animate-heartbeat"
        >
          Yes ✨
        </button>
        <RunawayNo onClick={() => setAnswer('no')} />
      </div>
    </div>
  );
}

function ValentinesDay({ userName }) {
  return (
    <DayPageTemplate
      userName={userName}
      dayKey="valentines-day"
      dayName="Valentine's Day"
      date="14th February"
      emoji="💝"
      gradientFrom="from-rose-500"
      gradientTo="to-red-600"
      heading="Valentine's Day"
      subHeading="The day love celebrates itself 💝"
      bodyText={`Happy Valentine's Day, ${userName}! 💝 This is it — the most magical day of the entire week. Valentine's Day isn't just about chocolates and roses (though those are lovely too). It's about the feeling that makes your heart skip a beat, the smile that lights up your whole world, and the quiet moments that mean everything. Today, I want you to know — out of all the people in this entire universe, you are the one I'd choose. Again and again. Always.`}
      quote="Love is not something you find. It's something you build, one beautiful day at a time."
      images={IMAGES}
      videos={VIDEOS}
      userPhotos={USER_PHOTOS}
      extraContent={<ValentineAsk userName={userName} />}
    />
  );
}

export default ValentinesDay;