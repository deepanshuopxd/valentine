import { useEffect } from 'react';

/* ── Gift data keyed by route path ── */
const GIFTS = {
  'rose-day': {
    emoji: '🌹',
    title: 'A Dozen Red Roses',
    description: 'Twelve perfect red roses, each one representing a reason why you are so special to me. Every petal holds a whisper of love.',
    ribbon: '#ef4444',
  },
  'proposal-day': {
    emoji: '💍',
    title: 'A Promise Ring',
    description: 'A delicate ring that says — I choose you, today and every day. It\'s not just jewelry; it\'s a piece of my heart.',
    ribbon: '#a855f7',
  },
  'chocolate-day': {
    emoji: '🍫',
    title: 'A Box of Handmade Chocolates',
    description: 'Twelve handcrafted Belgian chocolates, each filled with a different flavour of love — just as sweet as you.',
    ribbon: '#92400e',
  },
  'teddy-day': {
    emoji: '🧸',
    title: 'A Fluffy Teddy Bear',
    description: 'A soft, warm teddy that you can hug whenever you miss me. It\'s stuffed with all the love I have for you.',
    ribbon: '#d97706',
  },
  'promise-day': {
    emoji: '🕊️',
    title: 'A Lifetime of Promises',
    description: 'I promise to be your sunshine on cloudy days, your smile on sad days, and your home wherever we go.',
    ribbon: '#0891b2',
  },
  'hug-day': {
    emoji: '🤗',
    title: 'An Eternal Hug',
    description: 'Imagine the warmest, tightest hug — the kind that makes the whole world feel safe. That\'s my gift to you, always.',
    ribbon: '#16a34a',
  },
  'kiss-day': {
    emoji: '💋',
    title: 'A Thousand Kisses',
    description: 'A thousand kisses on your forehead, on your cheek, on your hand — because every part of you deserves to be cherished.',
    ribbon: '#db2777',
  },
  'valentines-day': {
    emoji: '💝',
    title: 'My Whole Heart',
    description: 'Today I give you the biggest gift I have — my entire heart. It\'s yours, forever and always. Be my Valentine?',
    ribbon: '#e11d48',
  },
};

function GiftModal({ dayKey, onClose }) {
  const gift = GIFTS[dayKey] || GIFTS['valentines-day'];

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
      onClick={onClose}
    >
      {/* Modal card */}
      <div
        className="animate-modalIn glass-card rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close X */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-pink-400 hover:text-pink-600 transition-colors focus:outline-none"
        >
          ×
        </button>

        {/* Ribbon tag */}
        <div
          className="inline-block px-3 py-0.5 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-3"
          style={{ backgroundColor: gift.ribbon }}
        >
          🎁 Your Gift
        </div>

        {/* Giant emoji */}
        <div className="text-8xl mb-3 animate-heartbeat">{gift.emoji}</div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-pink-700 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          {gift.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          {gift.description}
        </p>

        {/* Sparkles */}
        <div className="flex justify-center gap-3 mt-5">
          {['✨','💫','⭐','💫','✨'].map((s, i) => (
            <span key={i} className="animate-sparkle text-lg" style={{ animationDelay: `${i * 0.2}s` }}>{s}</span>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-5 px-6 py-2 rounded-full bg-linear-to-r from-pink-400 to-rose-500 text-white font-semibold shadow hover:shadow-md hover:from-pink-500 hover:to-rose-600 transition-all duration-300 focus:outline-none"
        >
          Thank you 💝
        </button>
      </div>
    </div>
  );
}

export default GiftModal;