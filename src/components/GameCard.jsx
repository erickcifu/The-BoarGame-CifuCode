import Image from "next/image";
import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <Link href={`/game/${game.id}`} className="block h-full">
      <div className="bg-blue-300 rounded-2xl shadow hover:shadow-lg transition
        overflow-hidden cursor-pointer animate-fade-in-up flex flex-col h-full">

        <div className="relative w-full h-56">
          <Image
            src={game.image}
            alt={game.name}
            fill
            className="object-cover"
          />
        </div>

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
