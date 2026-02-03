import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import GiftIcon from './GiftIcon';
import GiftModal from './GiftModal';

/**
 * Props:
 *  - userName       : string
 *  - dayKey         : string   e.g. "rose-day"   (matches GiftModal keys)
 *  - dayName        : string   e.g. "Rose Day"
 *  - date           : string   e.g. "7th February"
 *  - emoji          : string
 *  - gradientFrom   : tailwind class fragment  e.g. "from-red-400"
 *  - gradientTo     : tailwind class fragment  e.g. "to-rose-500"
 *  - heading        : string   big title
 *  - subHeading     : string
 *  - bodyText       : string   paragraph
 *  - quote          : string   italic quote box
 *  - images         : array of { src, alt } — online images
 *  - videos         : array of { src, poster, caption } — placeholders for user videos
 *  - userPhotos     : array of { placeholder: true, label } — 6 slots for user's own photos
 *  - extraContent   : JSX      anything extra the page wants to render
 */
function DayPageTemplate({
  userName,
  dayKey,
  dayName,
  date,
  emoji,
  gradientFrom = 'from-pink-400',
  gradientTo   = 'to-rose-500',
  heading,
  subHeading,
  bodyText,
  quote,
  images = [],
  videos = [],
  userPhotos = [],
  extraContent = null,
}) {
  const [giftOpen, setGiftOpen] = useState(false);

  return (
    <div className="min-h-screen relative z-10">
      <Navbar userName={userName} />
      {/* Gift floating button */}
      <GiftIcon onClick={() => setGiftOpen(true)} />
      {/* Gift modal */}
      {giftOpen && <GiftModal dayKey={dayKey} onClose={() => setGiftOpen(false)} />}

      <div className="max-w-2xl mx-auto px-4 pt-20 pb-32">

        {/* ── Hero banner ── */}
        <div className={`rounded-3xl bg-linear-to-br ${gradientFrom} ${gradientTo} p-6 sm:p-8 text-center shadow-lg animate-fadeInUp`}>
          <span className="text-5xl sm:text-6xl">{emoji}</span>
          <p className="text-white text-xs font-bold uppercase tracking-widest mt-2 opacity-80">{date}</p>
          <h1 className="text-white text-2xl sm:text-3xl font-bold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            {heading}
          </h1>
          {subHeading && <p className="text-white opacity-80 text-sm mt-1">{subHeading}</p>}
        </div>

        {/* ── Body text ── */}
        <div className="glass-card rounded-2xl mt-5 p-5 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
          <p className="text-gray-600 text-base leading-relaxed">{bodyText}</p>
        </div>

        {/* ── Quote box ── */}
        {quote && (
          <div className="mt-4 border-l-4 border-pink-400 bg-pink-50 rounded-r-2xl p-4 animate-slideInLeft" style={{ animationDelay: '0.25s' }}>
            <p className="text-pink-600 italic text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
              "{quote}"
            </p>
          </div>
        )}

        {/* ── Online Images ── */}
        {images.length > 0 && (
          <div className="mt-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-pink-600 font-bold text-sm uppercase tracking-wide mb-3">✨ {dayName} Vibes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-36 sm:h-40 object-cover rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Videos (placeholders) ── */}
        {videos.length > 0 && (
          <div className="mt-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-pink-600 font-bold text-sm uppercase tracking-wide mb-3">🎥 Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {videos.map((v, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-pink-100">
                  {v.src ? (
                    <video controls className="w-full max-h-48" poster={v.poster}>
                      <source src={v.src} />
                      Your browser does not support video.
                    </video>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-40 bg-pink-50 text-pink-300">
                      <span className="text-3xl">🎥</span>
                      <p className="text-xs mt-1">{v.caption || 'Add your video here'}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── User Photos (6 placeholder slots) ── */}
        {userPhotos.length > 0 && (
          <div className="mt-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-pink-600 font-bold text-sm uppercase tracking-wide mb-3">📸 Our Moments</h3>
            <div className="grid grid-cols-3 gap-2">
              {userPhotos.map((ph, i) => (
                <div key={i} className="rounded-xl overflow-hidden border-2 border-dashed border-pink-200 h-28 sm:h-36 flex flex-col items-center justify-center bg-pink-50">
                  {ph.src ? (
                    <img src={ph.src} alt={ph.label || 'photo'} className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <span className="text-2xl text-pink-300">📷</span>
                      <p className="text-xs text-pink-300 mt-1">{ph.label || 'Your photo'}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-pink-300 mt-2 text-center">
              Replace the placeholder <code className="bg-pink-100 px-1 rounded">src</code> with your own image paths
            </p>
          </div>
        )}

        {/* ── Extra content (e.g. Valentine's Day special buttons) ── */}
        {extraContent}

        {/* ── Bottom nav: Back + Leave a Note ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <Link
            to="/home"
            className="px-5 py-2 rounded-full border-2 border-pink-200 text-pink-500 font-semibold text-sm hover:bg-pink-50 transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            to={`/leave-note?day=${encodeURIComponent(dayName)}`}
            className="px-5 py-2 rounded-full bg-linear-to-r from-pink-400 to-rose-500 text-white font-semibold text-sm shadow hover:shadow-md transition-all duration-300"
          >
            ✉️ Leave a Note
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DayPageTemplate;