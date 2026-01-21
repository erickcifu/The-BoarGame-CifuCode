import GameCard from "./GameCard";
import { games } from "@/data/games";

export default function GameGrid() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-10">
        Catálogo de Juegos 🎲
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
