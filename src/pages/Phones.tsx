import React from 'react';
import { Phone, Heart, Shield, Truck } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Phones() {
  const telefonos = [
    {
      id: 1,
      categoria: 'Emergencias',
      numeros: [
        { nombre: 'Policía', numero: '911' },
        { nombre: 'Bomberos', numero: '100' },
        { nombre: 'Ambulancia', numero: '107' },
      ],
      icon: Shield,
      color: 'text-red-400',
    },
    {
      id: 2,
      categoria: 'Salud',
      numeros: [
        { nombre: 'Hospital Municipal', numero: '555-4444' },
        { nombre: 'Centro de Salud', numero: '555-5555' },
        { nombre: 'Farmacia de Guardia', numero: '555-6666' },
      ],
      icon: Heart,
      color: 'text-emerald-400',
    },
    {
      id: 3,
      categoria: 'Servicios',
      numeros: [
        { nombre: 'Municipalidad', numero: '555-7777' },
        { nombre: 'Atención al Vecino', numero: '555-8888' },
        { nombre: 'Reclamos', numero: '555-9999' },
      ],
      icon: Truck,
      color: 'text-blue-400',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">Teléfonos Útiles</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {telefonos.map((categoria) => {
          const Icon = categoria.icon;
          return (
            <div key={categoria.id} className="bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-slate-700">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Icon className={`w-8 h-8 ${categoria.color} mr-3`} />
                  <h2 className="text-2xl font-bold text-white">{categoria.categoria}</h2>
                </div>
                
                <div className="space-y-4">
                  {categoria.numeros.map((telefono, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                      <span className="text-gray-200 font-medium">{telefono.nombre}</span>
                      <a
                        href={`tel:${telefono.numero}`}
                        className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {telefono.numero}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}