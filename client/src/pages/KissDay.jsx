import DayPageTemplate from '../components/DayPageTemplate';



/* ── Only forehead kiss & cheek kiss images ── */
const IMAGES = [
  { src: 'data:image/webp;base64,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', alt: 'Forehead kiss' },
  { src: 'https://images.unsplash.com/photo-1504383308090-c894fdcc538d?w=400&q=80', alt: 'Cheek kiss' },
  { src: 'https://www.shutterstock.com/shutterstock/photos/2041841945/display_1500/stock-vector-romantic-illustration-with-forehead-kiss-scene-man-kiss-woman-good-for-st-valentine-postcard-or-2041841945.jpghttps://static.vecteezy.com/system/resources/previews/001/936/353/original/cute-girl-kissing-boy-on-cheek-happy-valentine-cartoon-character-illustration-vector.jpg', alt: 'Gentle forehead kiss' },
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