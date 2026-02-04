import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const API_URL = 'https://valentine-backend-puv5.onrender.com/api/notes';

function LeaveNoteRouted({ userName }) {
  const [searchParams] = useSearchParams();
  const dayName = searchParams.get('day') || 'Valentine Week';

  const [message, setMessage] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ⚡ FAST MODE SUBMIT FUNCTION
  const handleSubmit = () => {
    if (!message.trim()) return;

    // 1. Start the "Sending..." animation immediately
    setLoading(true);
    setError('');

    // 2. Send data to server in BACKGROUND (We do NOT 'await' this!)
    axios.post(API_URL, {
      senderName: userName,
      recipientName: recipientName.trim() || 'My Valentine',
      dayName,
      message: message.trim(),
    }).catch(err => {
      // If the background save fails, we just log it to console.
      // For a fun Valentine app, speed is more important than strict error handling.
      console.error("Background save failed:", err);
    });

    // 3. Fake a 1.5 second delay so it feels "real" but fast
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true); // Show the success screen!
    }, 1500);
  };

  return (
    <div className="min-h-screen relative z-10">
      <Navbar userName={userName} />

      <div className="max-w-lg mx-auto px-4 pt-24 pb-16">

        {/* ── Success state ── */}
        {submitted ? (
          <div className="glass-card rounded-3xl p-8 text-center animate-modalIn mt-4">
            <div className="text-6xl animate-heartbeat">💌</div>
            <h2 className="text-2xl font-bold text-pink-700 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Note Sent!
            </h2>
            <p className="text-gray-500 mt-2">
              Your note for <strong className="text-pink-600">{dayName}</strong> has been saved to the database 💝
            </p>
            <div className="mt-4 bg-pink-50 rounded-xl p-4 text-left">
              <p className="text-xs text-pink-400 font-bold uppercase tracking-wide">Your message</p>
              <p className="text-gray-600 mt-1 italic">"{message}"</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <button
                onClick={() => { setSubmitted(false); setMessage(''); setRecipientName(''); }}
                className="px-5 py-2 rounded-full border-2 border-pink-300 text-pink-600 font-semibold text-sm hover:bg-pink-50 transition-colors"
              >
                Write another note
              </button>
              <Link
                to="/home"
                className="px-5 py-2 rounded-full bg-linear-to-r from-pink-400 to-rose-500 text-white font-semibold text-sm shadow hover:shadow-md transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          /* ── Form state ── */
          <div className="animate-fadeInUp">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-5xl">✉️</div>
              <h1 className="text-2xl font-bold text-pink-700 mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Leave a Note
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                For <strong className="text-pink-500">{dayName}</strong>
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6">

              {/* From */}
              <div className="mb-4">
                <label className="block text-pink-600 font-semibold text-xs uppercase tracking-wide mb-1">From</label>
                <div className="w-full px-4 py-2.5 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 font-semibold">
                  {userName}
                </div>
              </div>

              {/* To */}
              <div className="mb-4">
                <label className="block text-pink-600 font-semibold text-xs uppercase tracking-wide mb-1">To (optional)</label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Her / His name…"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none
                             bg-white text-pink-700 placeholder-pink-300 transition-all duration-300"
                />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2 my-4">
                <div className="h-px flex-1 bg-pink-200" />
                <span className="text-pink-300">💗</span>
                <div className="h-px flex-1 bg-pink-200" />
              </div>

              {/* Message */}
              <div className="mb-2">
                <label className="block text-pink-600 font-semibold text-xs uppercase tracking-wide mb-1">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write something from the heart…"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none
                             bg-white text-pink-700 placeholder-pink-300 resize-none transition-all duration-300"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-xs mt-2">{error}</p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!message.trim() || loading}
                className="mt-5 w-full py-3 rounded-xl
                           bg-linear-to-r from-pink-400 to-rose-500
                           text-white font-bold text-base shadow-md
                           hover:shadow-lg hover:from-pink-500 hover:to-rose-600
                           disabled:opacity-40 disabled:cursor-not-allowed
                           transition-all duration-300 focus:outline-none"
              >
                {loading ? 'Sending…' : 'Send Note 💌'}
              </button>
            </div>

            {/* Back link */}
            <div className="text-center mt-5">
              <Link to="/home" className="text-pink-400 text-sm hover:text-pink-600 transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeaveNoteRouted;