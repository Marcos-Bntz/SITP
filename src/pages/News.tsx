import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Noticias y Eventos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80"
            alt="Reunión comunitaria"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Consulta Pública: Plan de Desarrollo Urbano</h2>
            <p className="text-gray-600 mb-4">
              Se invita a todos los ciudadanos a participar en la consulta pública sobre el nuevo Plan de Desarrollo Urbano 2024-2030.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              15 de Abril, 2024
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
            alt="Proyecto comunitario"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Inauguración Centro Cultural</h2>
            <p className="text-gray-600 mb-4">
              Este fin de semana se inaugura el nuevo Centro Cultural Municipal con actividades gratuitas para toda la familia.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2" />
              Centro de la ciudad
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Próximos Eventos</h2>
        <div className="space-y-6">
          {[
            {
              id: 1,
              title: 'Taller de Presupuesto Participativo',
              date: '20 de Abril, 2024',
              location: 'Sala de Conferencias Municipal',
              attendees: 45,
            },
            {
              id: 2,
              title: 'Feria de Proyectos Comunitarios',
              date: '25 de Abril, 2024',
              location: 'Plaza Principal',
              attendees: 120,
            },
            {
              id: 3,
              title: 'Sesión Abierta del Concejo',
              date: '30 de Abril, 2024',
              location: 'Edificio Municipal',
              attendees: 30,
            },
          ].map((event) => (
            <div key={event.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  {event.location}
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-emerald-600" />
                <span className="text-sm text-gray-500">{event.attendees} asistentes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}