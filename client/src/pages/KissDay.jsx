import DayPageTemplate from '../components/DayPageTemplate';



/* ── Only forehead kiss & cheek kiss images ── */
const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1522406023249-1a5f586ae4db?w=400&q=80', alt: 'Forehead kiss' },
  { src: 'https://images.unsplash.com/photo-1504383308090-c894fdcc538d?w=400&q=80', alt: 'Cheek kiss' },
  { src: 'https://images.unsplash.com/photo-1491491578545-98182c625608?w=400&q=80', alt: 'Gentle forehead kiss' },
];

function KissDay({ userName }) {
  return (
    <DayPageTemplate
      userName={userName}
      dayKey="kiss-day"
      dayName="Kiss Day"
      date="13th February"
      emoji="💋"
      gradientFrom="from-pink-500"
      gradientTo="to-rose-600"
      heading="Kiss Day"
      subHeading="The softest way to say I love you 💋"
      bodyText={`Happy Kiss Day, ${userName}! 💋 Tomorrow is the big day — Valentine's Day — and tonight, we celebrate the gentlest gestures of love. A kiss on the forehead says "I will always protect you." A kiss on the cheek says "You are precious to me." These aren't just kisses — they're promises wrapped in tenderness. They are the quietest way to say everything your heart is feeling. Today, imagine me leaning in softly, pressing a kiss to your forehead, and whispering — "You are everything to me."`}
      quote="A kiss on the forehead is the most tender promise a heart can make."
      images={IMAGES}
      
    />
  );
}

export default KissDay;