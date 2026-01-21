/* eslint-disable @next/next/no-img-element */
export default function GameCard({ game }) {
  return (
    <div className="bg-blue-300 rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <img src={game.image} alt={game.name} className="w-full h-48 object-cover"/>

      <div className="p-4">
        <h3 className="text-gray-800 font-bold text-lg mb-1">{game.name}</h3>
        <p className="text-sm text-gray-700 mb-2">{game.category}</p>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-indigo-600">Q{game.price}</span>
          <span className="text-sm text-gray-600">⭐ {game.rating}</span>
        </div>
      </div>
    </div>
  );
}
