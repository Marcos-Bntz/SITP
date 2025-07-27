import React from 'react';
import { MessageSquare, Vote, FileText } from 'lucide-react';

export default function Participation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">Participación Ciudadana</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Enviar Reporte</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200">Título del reporte</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-slate-600 bg-slate-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 placeholder-gray-400"
                placeholder="Ej: Alumbrado público defectuoso"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Ubicación</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-slate-600 bg-slate-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 placeholder-gray-400"
                placeholder="Dirección o referencia"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Descripción</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-slate-600 bg-slate-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 placeholder-gray-400"
                placeholder="Describe el problema detalladamente"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200"
            >
              Enviar Reporte
            </button>
          </form>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-6 text-white">Propuestas Activas</h2>
          <div className="space-y-6">
            {[
              {
                id: 1,
                title: 'Parque Comunitario',
                description: 'Creación de un nuevo espacio verde en el barrio centro',
                votes: 156,
              },
              {
                id: 2,
                title: 'Ciclovía Urbana',
                description: 'Implementación de red de ciclovías en avenidas principales',
                votes: 89,
              },
              {
                id: 3,
                title: 'Programa Cultural',
                description: 'Eventos culturales gratuitos los fines de semana',
                votes: 234,
              },
            ].map((proposal) => (
              <div key={proposal.id} className="border-b border-slate-600 pb-4">
                <h3 className="text-lg font-semibold text-white">{proposal.title}</h3>
                <p className="text-gray-200 mb-2">{proposal.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{proposal.votes} votos</span>
                  <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-200">
                    Votar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700">
          <MessageSquare className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-white">Foros de Discusión</h3>
          <p className="text-gray-200">Participa en debates sobre temas de interés comunitario.</p>
        </div>
        
        <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700">
          <Vote className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-white">Encuestas</h3>
          <p className="text-gray-200">Vota en encuestas sobre proyectos y políticas públicas.</p>
        </div>
        
        <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700">
          <FileText className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-white">Documentos</h3>
          <p className="text-gray-200">Accede a documentos y recursos informativos.</p>
        </div>
      </div>
    </div>
  );
}