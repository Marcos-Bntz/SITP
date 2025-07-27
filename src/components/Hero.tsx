import React from 'react';
import { LineChart, Users, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center bg-blend-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-2xl">
                <span className="block">Sistema Inteligente de</span>
                <span className="block text-white">Transparencia y Participación</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 drop-shadow-lg">
                Facilitamos la participación ciudadana y promovemos la transparencia en la gestión pública. Juntos construimos una comunidad más informada y participativa.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow-lg">
                  <a
                    href="#transparency"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                  >
                    Ver Transparencia
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#participate"
                    className="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-slate-900 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Participar
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}