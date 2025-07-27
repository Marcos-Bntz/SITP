import React from 'react';
import { Menu, X, User, BarChart2, Users, Bell, Store, Truck, Phone, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LoginModal } from './auth/LoginModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Inicio', href: '/', icon: null },
    { name: 'Transparencia', href: '/transparency', icon: BarChart2 },
    { name: 'Participación', href: '/participation', icon: Users },
    { name: 'Noticias', href: '/news', icon: Bell },
    { name: 'Comercios', href: '/commerce', icon: Store },
    { name: 'Delivery', href: '/delivery', icon: Truck },
    { name: 'Teléfonos', href: '/phones', icon: Phone },
    { name: 'Eventos', href: '/events', icon: Calendar },
  ];

  return (
    <>
      <nav className="bg-slate-900/95 backdrop-blur-md shadow-2xl fixed w-full z-40 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors duration-200">SITPC</Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-emerald-400 border-b-2 border-emerald-400'
                        : 'text-gray-300 hover:text-emerald-400'
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 flex items-center transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <User className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </button>
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden bg-slate-900/98 backdrop-blur-md border-b border-emerald-500/20">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-emerald-400 bg-emerald-900/30'
                      : 'text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 transition-colors duration-200"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        )}
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}