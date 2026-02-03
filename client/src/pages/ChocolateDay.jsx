import DayPageTemplate from '../components/DayPageTemplate';



const IMAGES = [
  { src: 'https://img1.cgtrader.com/items/1002414/f1b63dd761/chocolate-box-3d-model-max--obj-mtl-fbx.jpg', alt: 'Chocolate box' },
  { src: 'https://m.media-amazon.com/images/I/61nzp7jt+hL._SL1200_.jpg', alt: 'Dark chocolate' },
  { src: 'https://m.media-amazon.com/images/I/61+ESe18blL._SX342_.jpg', alt: 'Chocolate pieces' },
];

function ChocolateDay({ userName }) {
  return (
    <DayPageTemplate
      userName={userName}
      dayKey="chocolate-day"
      dayName="Chocolate Day"
      date="9th February"
      emoji="🍫"
      gradientFrom="from-amber-500"
      gradientTo="to-orange-600"
      heading="Chocolate Day"
      subHeading="Life is sweeter with you 🍫"
      bodyText={`Happy Chocolate Day, ${userName}! 🍫 Did you know that chocolate was once considered a gift from the gods? Today, it's a gift from the heart. Chocolate Day is all about sweetening someone's day — and you already do that just by being you. Picture a box of the finest Belgian chocolates, each one filled with a different flavour — dark, milk, white, caramel — just like the many beautiful layers of love. Today, let's celebrate the sweetness that life brings when you're around.`}
      quote="Life is like a box of chocolates — sweetest when shared with someone you love."
      images={IMAGES}
      
    />
  );
}

export default ChocolateDay;