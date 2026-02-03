import DayPageTemplate from '../components/DayPageTemplate';



const IMAGES = [
  { src: 'https://img.freepik.com/free-photo/man-woman-making-pinky-promise_23-2148378534.jpg', alt: 'Hands holding' },
  { src: 'https://d104tpg70nvstz.cloudfront.net/2017/04/honeymoon.jpg', alt: 'White dove' },
  { src: 'https://tse1.explicit.bing.net/th/id/OIP.E70JT7I9lM3FZNhBcW32bwHaEu?w=720&h=459&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'Sunset couple' },
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