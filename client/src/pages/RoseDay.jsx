import DayPageTemplate from '../components/DayPageTemplate';

/* ── 6 placeholder slots for YOUR photos ── */

/* ── Online images for Rose Day ── */
const IMAGES = [
  { src: 'https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1548918792/vendor/275/catalog/product/4/3/43bcc32b2649458027302b53479196a9.jpg', alt: 'Red roses bouquet' },
  { src: 'https://static.vecteezy.com/system/resources/previews/028/034/484/large_2x/elegant-white-rose-blossoms-adorning-background-in-abundance-ai-generated-free-photo.jpg', alt: 'Single red rose' },
  { src: 'https://as1.ftcdn.net/v2/jpg/01/86/45/16/1000_F_186451657_AR54N594fdsa5FOHSvy5OR1XS3jHIWSI.jpg', alt: 'Rose petals' },
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