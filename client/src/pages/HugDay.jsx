import DayPageTemplate from '../components/DayPageTemplate';





const IMAGES = [
  { src: 'https://img.freepik.com/premium-vector/valentines-day-girl-hugs-guy-couple-love-vector-cartoon-style_844724-2535.jpg', alt: 'Couple hugging' },
  { src: 'https://gifdb.com/images/high/peach-and-goma-hug-m2o3js9u468ergqx.gif', alt: 'Warm embrace' },
  { src: 'https://tse1.explicit.bing.net/th/id/OIP._KYfOhTjP438UpnxBjlDowHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Hug moment' },
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