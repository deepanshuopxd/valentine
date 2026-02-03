import DayPageTemplate from '../components/DayPageTemplate';

/* ── 6 placeholder slots for YOUR photos ── */

/* ── Online images for Rose Day ── */
const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80', alt: 'Red roses bouquet' },
  { src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80', alt: 'Single red rose' },
  { src: 'https://images.unsplash.com/photo-1490750967868-1ad571e3e200?w=400&q=80', alt: 'Rose petals' },
];

function RoseDay({ userName }) {
  return (
    <DayPageTemplate
      userName={userName}
      dayKey="rose-day"
      dayName="Rose Day"
      date="7th February"
      emoji="🌹"
      gradientFrom="from-red-400"
      gradientTo="to-rose-600"
      heading="Rose Day"
      subHeading="The week of love begins 🌹"
      bodyText={`Happy Rose Day, ${userName}! 🌹 Today marks the very beginning of Valentine Week — and what better way to start than with the most beautiful flower in the world? A red rose is more than just a flower; it's a symbol of deep, passionate love. Every petal whispers something that words often can't — that you matter, that you are cherished, and that love is in the air. Today, imagine receiving a bouquet of the freshest red roses, hand-picked just for you.`}
      quote="A rose has no reason to bloom except to be loved."
      images={IMAGES}
    
    />
  );
}

export default RoseDay;