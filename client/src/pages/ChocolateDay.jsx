import DayPageTemplate from '../components/DayPageTemplate';

const USER_PHOTOS = [
  { src: '', label: 'Photo 1' },
  { src: '', label: 'Photo 2' },
  { src: '', label: 'Photo 3' },
  { src: '', label: 'Photo 4' },
  { src: '', label: 'Photo 5' },
  { src: '', label: 'Photo 6' },
];

const VIDEOS = [
  { src: '', poster: '', caption: 'Video 1 — Your video here' },
  { src: '', poster: '', caption: 'Video 2 — Your video here' },
];

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1611224885273-b93570173457?w=400&q=80', alt: 'Chocolate box' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', alt: 'Dark chocolate' },
  { src: 'https://images.unsplash.com/photo-1572116470910-1bc688a38988?w=400&q=80', alt: 'Chocolate pieces' },
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
      videos={VIDEOS}
      userPhotos={USER_PHOTOS}
    />
  );
}

export default ChocolateDay;