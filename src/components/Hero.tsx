import React from 'react';
import { LineChart, Users, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Sistema Inteligente de</span>
                <span className="block text-emerald-600">Transparencia y Participación</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Facilitamos la participación ciudadana y promovemos la transparencia en la gestión pública. Juntos construimos una comunidad más informada y participativa.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#transparency"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                  >
                    Ver Transparencia
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#participate"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10"
                  >
                    Participar
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-emerald-50 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8 p-8">
            <div className="text-center">
              <LineChart className="w-12 h-12 mx-auto text-emerald-600" />
              <p className="mt-2 text-lg font-semibold">Datos Transparentes</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-emerald-600" />
              <p className="mt-2 text-lg font-semibold">Participación Activa</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto text-emerald-600" />
              <p className="mt-2 text-lg font-semibold">Reportes Ciudadanos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}