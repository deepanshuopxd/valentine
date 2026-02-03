import DayPageTemplate from '../components/DayPageTemplate';



const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1515890435833-a8dd6c6ff771?w=400&q=80', alt: 'Hands holding' },
  { src: 'https://images.unsplash.com/photo-1491746027182-23156dbaa22b?w=400&q=80', alt: 'White dove' },
  { src: 'https://images.unsplash.com/photo-1504383631473-408983f52b74?w=400&q=80', alt: 'Sunset couple' },
];

function PromiseDay({ userName }) {
  return (
    <DayPageTemplate
      userName={userName}
      dayKey="promise-day"
      dayName="Promise Day"
      date="11th February"
      emoji="🕊️"
      gradientFrom="from-sky-400"
      gradientTo="to-cyan-500"
      heading="Promise Day"
      subHeading="Promises that come from the heart 🕊️"
      bodyText={`Happy Promise Day, ${userName}! 🕊️ Today isn't about grand gestures or flashy words — it's about the quiet, sincere promises we make to the people we love. A promise is a thread that connects two hearts across time and distance. Today, I want you to know: I promise to always be honest with you, to always show up, and to always remind you how incredible you are. Because you deserve someone who keeps their word — always.`}
      quote="A promise made from the heart is a bridge that love builds between two souls."
      images={IMAGES}
      
    />
  );
}

export default PromiseDay;