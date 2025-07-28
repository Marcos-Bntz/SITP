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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden transition-colors duration-300">
        {/* Patrón de fondo profesional - Modo claro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(0,0,0,0.02)_50%,transparent_70%)] dark:bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)]"></div>
        
        {/* Elementos decorativos - Modo claro */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-600/8 dark:bg-emerald-600/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
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
