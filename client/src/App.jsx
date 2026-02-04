import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import RoseDay from './pages/RoseDay';
import ProposalDay from './pages/ProposalDay';
import ChocolateDay from './pages/ChocolateDay';
import TeddyDay from './pages/TeddyDay';
import PromiseDay from './pages/PromiseDay';
import HugDay from './pages/HugDay';
import KissDay from './pages/KissDay';
import ValentinesDay from './pages/ValentinesDay';
import LeaveNoteRouted from './pages/LeaveNoteRouted';
import FloatingHearts from './components/FloatingHearts';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [userName, setUserName] = useState(() => {
    // Persist name in sessionStorage so refresh doesn't lose it
    return sessionStorage.getItem('valentineName') || '';
  });

  useEffect(() => {
    if (userName) sessionStorage.setItem('valentineName', userName);
  }, [userName]);

  return (
    <Router>
      {/* Floating hearts on every page */}
      <FloatingHearts />

      <Routes>
        {/* Welcome — enter name */}
        <Route
          path="/"
          element={userName ? <Navigate to="/home" /> : <Welcome setUserName={setUserName} />}
        />

        {/* Home — Hi name, tour of days */}
        
        <Route path="/home" element={userName ? <Home userName={userName} setUserName={setUserName} /> : <Navigate to="/" />} />
        

        {/* Valentine Week Days */}
        <Route path="/rose-day"       element={userName ? <RoseDay       userName={userName} /> : <Navigate to="/" />} />
        <Route path="/proposal-day"   element={userName ? <ProposalDay   userName={userName} /> : <Navigate to="/" />} />
        <Route path="/chocolate-day"  element={userName ? <ChocolateDay  userName={userName} /> : <Navigate to="/" />} />
        <Route path="/teddy-day"      element={userName ? <TeddyDay      userName={userName} /> : <Navigate to="/" />} />
        <Route path="/promise-day"    element={userName ? <PromiseDay    userName={userName} /> : <Navigate to="/" />} />
        <Route path="/hug-day"        element={userName ? <HugDay        userName={userName} /> : <Navigate to="/" />} />
        <Route path="/kiss-day"       element={userName ? <KissDay       userName={userName} /> : <Navigate to="/" />} />
        <Route path="/valentines-day" element={userName ? <ValentinesDay userName={userName} /> : <Navigate to="/" />} />

        {/* Leave a Note — routed with dayName query param */}
        <Route path="/leave-note" element={userName ? <LeaveNoteRouted userName={userName} /> : <Navigate to="/" />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Analytics/>
    </Router>
  );
}

export default App;