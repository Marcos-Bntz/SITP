import React from 'react';
import { BarChart, PieChart, LineChart } from 'lucide-react';

export default function Transparency() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Portal de Transparencia</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BarChart className="w-12 h-12 text-emerald-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Presupuesto Anual</h2>
          <p className="text-gray-600">Visualiza la distribución del presupuesto municipal por áreas y proyectos.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <PieChart className="w-12 h-12 text-emerald-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Gastos Públicos</h2>
          <p className="text-gray-600">Monitorea los gastos realizados en diferentes sectores y servicios.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <LineChart className="w-12 h-12 text-emerald-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Contratos y Licitaciones</h2>
          <p className="text-gray-600">Accede a información sobre procesos de contratación y licitaciones públicas.</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Datos Abiertos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: 1, name: 'Presupuesto 2024', date: '2024-01-15', status: 'Publicado' },
                { id: 2, name: 'Informe de Gastos Q1', date: '2024-03-31', status: 'En revisión' },
                { id: 3, name: 'Licitaciones Vigentes', date: '2024-04-01', status: 'Actualizado' },
              ].map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-emerald-600 hover:text-emerald-900">Ver detalles</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}