import DayPageTemplate from '../components/DayPageTemplate';



const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6a7?w=400&q=80', alt: 'Diamond ring' },
  { src: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6a8?w=400&q=80', alt: 'Proposal setup' },
  { src: 'https://images.unsplash.com/photo-1506632549135-3e0ac4406e53?w=400&q=80', alt: 'Couple proposal' },
];

function ProposalDay({ userName }) {
  return (
    <DayPageTemplate
      userName={userName}
      dayKey="proposal-day"
      dayName="Proposal Day"
      date="8th February"
      emoji="💍"
      gradientFrom="from-purple-400"
      gradientTo="to-fuchsia-500"
      heading="Proposal Day"
      subHeading="A day to say what your heart feels 💍"
      bodyText={`Happy Proposal Day, ${userName}! 💍 Today is all about expressing the deepest feelings of your heart — not necessarily with a ring, but with honesty and courage. It's the day to tell someone exactly how you feel, no filters, no hesitation. Love is brave, and today bravery is celebrated. Whether it's a whispered confession or a grand gesture under the stars, today is YOUR day to shine. Your feelings matter more than perfection.`}
      quote="The bravest thing you can do is open your heart completely."
      images={IMAGES}
      
    />
  );
}

export default ProposalDay;