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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed bg-blend-overlay">
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
        <div className="fixed bottom-4 right-4 text-xs text-gray-400 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
          Foto de <a href="https://unsplash.com/es/@kirp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200">Andrew Kliatskyi</a> en <a href="https://unsplash.com/es/fotos/una-foto-en-blanco-y-negro-de-un-telefono-celular-B_Z9jqassqE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200">Unsplash</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
