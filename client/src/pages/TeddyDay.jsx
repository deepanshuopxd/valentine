import DayPageTemplate from '../components/DayPageTemplate';



const IMAGES = [
  { src: 'https://www.wallpaperbetter.com/wallpaper/117/1/171/white-teddy-bear-cute-free-background-for-computer-720P-wallpaper-middle-size.jpg', alt: 'Fluffy teddy bear' },
  { src: 'https://www.shutterstock.com/shutterstock/photos/2362412815/display_1500/stock-vector-cute-white-teddy-bear-with-heart-2362412815.jpg', alt: 'Teddy bear with heart' },
  { src: 'https://i.etsystatic.com/50181749/r/il/1ecfb9/5781945935/il_fullxfull.5781945935_j22k.jpg', alt: 'Cute stuffed bear' },
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