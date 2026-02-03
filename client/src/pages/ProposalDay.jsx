import DayPageTemplate from '../components/DayPageTemplate';



const IMAGES = [
  { src: 'https://static.vecteezy.com/system/resources/previews/022/660/294/non_2x/wedding-proposal-cartoon-colored-clipart-free-vector.jpg', alt: 'Diamond ring' },
  { src: 'https://cdn5.vectorstock.com/i/1000x1000/50/44/cartoon-marriage-proposal-vector-985044.jpg', alt: 'Proposal setup' },
  { src: 'https://cdn1.vectorstock.com/i/1000x1000/12/75/romantic-marriage-proposal-silhouette-image-vector-44891275.jpg', alt: 'Couple proposal' },
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