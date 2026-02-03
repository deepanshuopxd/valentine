// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Welcome() {
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   const handleNext = () => {
//     const trimmed = name.trim();
//     if (!trimmed) return;
//     sessionStorage.setItem('valentineName', trimmed);
//     navigate('/home');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
//       {/* Card */}
//       <div className="glass-card rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full text-center animate-fadeInUp">
//         {/* Big heart */}
//         <div className="text-7xl mb-4 animate-heartbeat">💝</div>

//         {/* Title */}
//         <h1
//           className="text-3xl sm:text-4xl font-bold text-pink-700 mb-2"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           Welcome
//         </h1>
//         <p className="text-pink-400 text-sm mb-6">
//           Something special awaits you this Valentine Week ✨
//         </p>

//         {/* Divider */}
//         <div className="flex items-center justify-center gap-2 mb-6">
//           <div className="h-px w-10 bg-pink-200" />
//           <span className="text-pink-300">🌹</span>
//           <div className="h-px w-10 bg-pink-200" />
//         </div>

//         {/* Name input */}
//         <label className="block text-pink-600 font-semibold text-sm mb-2 text-left">
//           Enter your name
//         </label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleNext()}
//           placeholder="Your name…"
//           className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none
//                      bg-white text-pink-700 placeholder-pink-300 text-center text-lg font-semibold
//                      shadow-sm transition-all duration-300"
//         />

//         {/* Next button */}
//         <button
//           onClick={handleNext}
//           disabled={!name.trim()}
//           className="mt-6 w-full py-3 rounded-2xl
//                      bg-linear-to-r from-pink-400 to-rose-500
//                      text-white font-bold text-lg shadow-md
//                      hover:shadow-lg hover:from-pink-500 hover:to-rose-600
//                      disabled:opacity-40 disabled:cursor-not-allowed
//                      transition-all duration-300 focus:outline-none"
//         >
//           Next →
//         </button>

//         {/* Tiny footer */}
//         <p className="text-pink-300 text-xs mt-5">Made with 💗</p>
//       </div>
//     </div>
//   );
// }

// export default Welcome;









import { useState } from 'react';
// We don't need useNavigate anymore because App.jsx handles the redirect automatically!

function Welcome({ setUserName }) { // <--- 1. Receive this prop
  const [name, setName] = useState('');

  const handleNext = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    // 2. Save to storage
    sessionStorage.setItem('valentineName', trimmed);
    
    // 3. Tell App.jsx that the user is logged in
    // This triggers App.jsx to automatically switch you to /home
    setUserName(trimmed);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      {/* Card */}
      <div className="glass-card rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full text-center animate-fadeInUp">
        <div className="text-7xl mb-4 animate-heartbeat">💝</div>

        <h1
          className="text-3xl sm:text-4xl font-bold text-pink-700 mb-2 font-handwriting"
        >
          Welcome
        </h1>
        <p className="text-pink-400 text-sm mb-6">
          Something special awaits you this Valentine Week ✨
        </p>

        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-10 bg-pink-200" />
          <span className="text-pink-300">🌹</span>
          <div className="h-px w-10 bg-pink-200" />
        </div>

        <label className="block text-pink-600 font-semibold text-sm mb-2 text-left">
          Enter your name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
          placeholder="Your name…"
          className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none
                     bg-white text-pink-700 placeholder-pink-300 text-center text-lg font-semibold
                     shadow-sm transition-all duration-300"
        />

        <button
          onClick={handleNext}
          disabled={!name.trim()}
          className="mt-6 w-full py-3 rounded-2xl
                     bg-linear-to-r from-pink-400 to-rose-500
                     text-white font-bold text-lg shadow-md
                     hover:shadow-lg hover:from-pink-500 hover:to-rose-600
                     disabled:opacity-40 disabled:cursor-not-allowed
                     transition-all duration-300 focus:outline-none"
        >
          Next →
        </button>

        <p className="text-pink-300 text-xs mt-5">Made with 💗</p>
      </div>
    </div>
  );
}

export default Welcome;