import DayPageTemplate from '../components/DayPageTemplate';



const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1558679388-a8a8c094dd3c?w=400&q=80', alt: 'Fluffy teddy bear' },
  { src: 'https://images.unsplash.com/photo-1611074789680-73e2a694a725?w=400&q=80', alt: 'Teddy bear with heart' },
  { src: 'https://images.unsplash.com/photo-1536640765-7483fd51871d?w=400&q=80', alt: 'Cute stuffed bear' },
];

function TeddyDay({ userName }) {
  return (
    <DayPageTemplate
      userName={userName}
      dayKey="teddy-day"
      dayName="Teddy Day"
      date="10th February"
      emoji="🧸"
      gradientFrom="from-yellow-400"
      gradientTo="to-amber-500"
      heading="Teddy Day"
      subHeading="A hug in the form of a bear 🧸"
      bodyText={`Happy Teddy Day, ${userName}! 🧸 Today is about softness, warmth, and comfort — everything a teddy bear represents. When you can't be there to give a hug in person, a teddy bear does the job beautifully. It's fluffy, it's cuddly, and it holds all the love you pour into it. Today, imagine a giant teddy bear sitting on your bed, waiting for you — its arms wide open, ready to give you the warmest hug ever. Because you deserve to feel loved every single day.`}
      quote="A teddy bear is a friend who never judges, always listens, and always hugs back."
      images={IMAGES}
      
    />
  );
}

export default TeddyDay;