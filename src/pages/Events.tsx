import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Events() {
  const eventos = [
    {
      id: 1,
      titulo: 'Festival Cultural',
      fecha: '15 de Mayo, 2024',
      hora: '16:00 - 22:00',
      lugar: 'Plaza Principal',
      descripcion: 'Música en vivo, arte local y gastronomía típica.',
      asistentes: 500,
      imagen: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      titulo: 'Feria del Libro',
      fecha: '20 de Mayo, 2024',
      hora: '10:00 - 20:00',
      lugar: 'Centro Cultural',
      descripcion: 'Presentaciones de libros, talleres y charlas con autores.',
      asistentes: 300,
      imagen: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      titulo: 'Maratón Municipal',
      fecha: '25 de Mayo, 2024',
      hora: '08:00',
      lugar: 'Parque Municipal',
      descripcion: 'Carrera 5K y 10K, actividades deportivas para toda la familia.',
      asistentes: 1000,
      imagen: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Eventos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventos.map((evento) => (
          <Card key={evento.id} className="overflow-hidden">
            <img
              src={evento.imagen}
              alt={evento.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{evento.titulo}</h2>
              <p className="text-gray-600 mb-4">{evento.descripcion}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {evento.fecha}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {evento.hora}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {evento.lugar}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {evento.asistentes} asistentes
                </div>
              </div>
              
              <button className="mt-4 w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                Inscribirse
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}