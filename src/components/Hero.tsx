import React from 'react';
import { LineChart, Users, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl transition-colors duration-300">
                <span className="block">Sistema Inteligente de</span>
                <span className="block bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">Transparencia y Participación</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-colors duration-300">
                Facilitamos la participación ciudadana y promovemos la transparencia en la gestión pública. Juntos construimos una comunidad más informada y participativa.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow-lg">
                  <a
                    href="#transparency"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 shadow-emerald-500/25"
                  >
                    Ver Transparencia
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#participate"
                    className="w-full flex items-center justify-center px-8 py-3 border border-emerald-500 text-base font-medium rounded-md text-emerald-600 dark:text-emerald-400 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-500/10 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                  >
                    Participar
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Elementos decorativos adicionales */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 dark:opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-emerald-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-emerald-300 rounded-full blur-lg"></div>
      </div>
    </div>
  );
}