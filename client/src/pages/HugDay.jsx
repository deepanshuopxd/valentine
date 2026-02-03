import DayPageTemplate from '../components/DayPageTemplate';





const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1491491578545-98182c625608?w=400&q=80', alt: 'Couple hugging' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', alt: 'Warm embrace' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80', alt: 'Hug moment' },
];

function HugDay({ userName }) {
  return (
    <DayPageTemplate
      userName={userName}
      dayKey="hug-day"
      dayName="Hug Day"
      date="12th February"
      emoji="🤗"
      gradientFrom="from-green-400"
      gradientTo="to-emerald-500"
      heading="Hug Day"
      subHeading="Some things words can't express 🤗"
      bodyText={`Happy Hug Day, ${userName}! 🤗 Today is about the most powerful thing two people can share — a hug. It's not just an embrace; it's a silent conversation. It says "I'm here", "I care", and "You're safe" all at once. Scientists say a hug releases oxytocin — the love hormone — and instantly makes you feel happier. Close your eyes and imagine my arms wrapping around you in the warmest, longest hug ever. Hold that feeling. You deserve to feel this good every single day.`}
      quote="A hug is a fence built around the heart with arms."
      images={IMAGES}
      
    />
  );
}

export default HugDay;