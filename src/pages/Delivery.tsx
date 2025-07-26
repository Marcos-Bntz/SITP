import React from 'react';
import { Truck, Clock, Phone, Star } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Delivery() {
  const servicios = [
    {
      id: 1,
      nombre: 'Express Local',
      tipo: 'Comida',
      horario: '11:00 - 23:00',
      telefono: '555-1111',
      calificacion: 4.8,
      imagen: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      nombre: 'Farmacia a Domicilio',
      tipo: 'Medicamentos',
      horario: '24 horas',
      telefono: '555-2222',
      calificacion: 4.9,
      imagen: 'https://images.unsplash.com/photo-1583912267550-d44c9c43f278?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      nombre: 'Super Express',
      tipo: 'Supermercado',
      horario: '8:00 - 22:00',
      telefono: '555-3333',
      calificacion: 4.7,
      imagen: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Servicios de Delivery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio) => (
          <Card key={servicio.id} className="overflow-hidden">
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{servicio.nombre}</h2>
              <p className="text-emerald-600 font-medium mb-4">{servicio.tipo}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {servicio.horario}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {servicio.telefono}
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  {servicio.calificacion}
                </div>
              </div>
              
              <button className="mt-4 w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                Hacer Pedido
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}