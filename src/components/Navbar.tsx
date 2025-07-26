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
      <nav className="bg-white shadow-lg fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-emerald-600">SITPC</Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      location.pathname === item.href
                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600'
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
                className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </button>
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block pl-3 pr-4 py-2 text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
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
                className="w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
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