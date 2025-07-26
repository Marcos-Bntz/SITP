import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Transparency from './pages/Transparency';
import Participation from './pages/Participation';
import News from './pages/News';
import Commerce from './pages/Commerce';
import Delivery from './pages/Delivery';
import Phones from './pages/Phones';
import Events from './pages/Events';

function App() {
  return (
    <Router basename="/SITP/">
      <div className="min-h-screen bg-gray-50 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed">
        <div className="min-h-screen bg-white/90">
          <Navbar />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/participation" element={<Participation />} />
              <Route path="/news" element={<News />} />
              <Route path="/commerce" element={<Commerce />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/phones" element={<Phones />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;