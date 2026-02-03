function GiftIcon({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="gift-pulse fixed bottom-6 right-6 z-40 w-16 h-16 flex items-center justify-center rounded-full shadow-lg
                 bg-linear-to-br from-pink-400 to-rose-500 border-4 border-white
                 hover:scale-110 transition-transform duration-300 focus:outline-none"
      aria-label="Open Gift"
    >
      <span className="text-3xl select-none">🎁</span>
    </button>
  );
}

export default GiftIcon;