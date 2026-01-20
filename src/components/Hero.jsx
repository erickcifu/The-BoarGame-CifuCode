export default function Hero() {
  return (
    <section className="relative px-6 py-24 text-center max-w-5xl mx-auto overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-62 h-62 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <h2 className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
        ¡Tu próxima gran aventura comienza aquí!
      </h2>
      
      <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-gray-900">
        Descubre tu próximo <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
          juego de mesa favorito
        </span>
      </h3>

      <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
        Deja atrás las pantallas y toma el control. Encuentra reinos por conquistar, 
        misterios por resolver y victorias memorables.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
          Explorar catálogo
        </button>
        <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
          Ver sponsors
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-100">
        {[
          { name: 'Estrategia', icon: '🏰', color: 'bg-amber-50' },
          { name: 'Familiares', icon: '🏠', color: 'bg-green-50' },
          { name: 'Party Games', icon: '🥳', color: 'bg-purple-50' },
          { name: 'Cooperativos', icon: '🤝', color: 'bg-red-50' },
        ].map((cat) => (
          <div 
            key={cat.name}
            className={`p-6 rounded-2xl ${cat.color} hover:scale-105 transition-transform cursor-pointer border border-transparent hover:border-gray-200`}
          >
            <span className="text-3xl mb-2 block">{cat.icon}</span>
            <span className="font-bold text-gray-800">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
