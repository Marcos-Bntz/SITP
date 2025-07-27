import React from 'react';
import { Store, MapPin, Clock, Phone } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Commerce() {
  const comercios = [
    {
      id: 1,
      nombre: 'Supermercado Central',
      categoria: 'Alimentación',
      direccion: 'Av. Principal 123',
      horario: '8:00 - 21:00',
      telefono: '555-0123',
      imagen: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      nombre: 'Farmacia del Sur',
      categoria: 'Salud',
      direccion: 'Calle Sur 456',
      horario: '24 horas',
      telefono: '555-0124',
      imagen: 'https://images.unsplash.com/photo-1586015555751-63c29b8cd2eb?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      nombre: 'Librería Municipal',
      categoria: 'Educación',
      direccion: 'Plaza Central 789',
      horario: '9:00 - 18:00',
      telefono: '555-0125',
      imagen: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">Comercios Locales</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {comercios.map((comercio) => (
          <div key={comercio.id} className="bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-slate-700">
            <img
              src={comercio.imagen}
              alt={comercio.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-white">{comercio.nombre}</h2>
              <p className="text-emerald-400 font-medium mb-4">{comercio.categoria}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-200">
                  <MapPin className="w-4 h-4 mr-2" />
                  {comercio.direccion}
                </div>
                <div className="flex items-center text-gray-200">
                  <Clock className="w-4 h-4 mr-2" />
                  {comercio.horario}
                </div>
                <div className="flex items-center text-gray-200">
                  <Phone className="w-4 h-4 mr-2" />
                  {comercio.telefono}
                </div>
              </div>
              
              <button className="mt-4 w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200">
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}