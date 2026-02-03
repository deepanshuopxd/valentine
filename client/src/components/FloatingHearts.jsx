import { useEffect, useState } from 'react';

const HEARTS = ['💗', '💖', '💕', '💓', '🌹', '✨', '💘', '🌸'];

function FloatingHearts() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      emoji: HEARTS[i % HEARTS.length],
      left: Math.random() * 100,            // % from left
      duration: 8 + Math.random() * 10,     // seconds
      delay: Math.random() * 6,             // stagger start
      size: 14 + Math.random() * 22,        // px
      opacity: 0.25 + Math.random() * 0.45,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petals select-none"
          style={{
            left: `${p.left}%`,
            top: '-40px',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;