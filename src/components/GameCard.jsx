import Image from "next/image";
import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <Link href={`/game/${game.id}`} className="block h-full">
      
      {/* CONTENEDOR RELATIVE */}
      <div
        className={`relative rounded-2xl shadow transition-all duration-300
        overflow-hidden cursor-pointer animate-fade-in-up flex flex-col h-full
        ${
          game.featured
            ? "bg-blue-300 ring-2 ring-yellow-400 hover:scale-[1.03] hover:shadow-yellow-400/50 hover:shadow-2xl"
            : "bg-blue-300 hover:bg-white hover:shadow-xl"
        }`}
      >
        {game.featured && (
          <span className="absolute top-3 left-3 bg-yellow-300 text-4xs font-bold px-3 py-1 rounded-full shadow z-10">
            👑 Destacado
          </span>
        )}

        {/* IMAGEN */}
        <div className="relative w-full h-56">
          <Image
            src={game.image}
            alt={game.name}
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-gray-800 font-bold text-lg mb-1 line-clamp-2">
            {game.name}
          </h3>

          <p className="text-sm text-gray-700 mb-2 line-clamp-1">
            {game.category}
          </p>

          <div className="flex justify-between items-center mt-auto">
            <span className="font-semibold text-indigo-600">
              Q{game.price}
            </span>
            <span className="text-sm text-gray-600">
              ⭐ {game.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
