"use client";

import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import Filters from "./Filters";
import SkeletonCard from "./SkeletonCard";

import { games as gamesData } from "@/data/games";

export default function GameGrid() {
  // Estados
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    category: "",
    rating: 0,
    price: 0,
  });

  //Simulación de carga
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setGames(gamesData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Aplicar filtros
  const filteredGames = games.filter((game) => {
    return (
      (!filters.category || game.category === filters.category) &&
      game.rating >= filters.rating &&
      (!filters.price || game.price <= filters.price)
    );
  });

  // Render
  return (
    <section id="catalogo" className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-10">
        Catálogo de Juegos 🎲
      </h2>

      <Filters filters={filters} setFilters={setFilters} />

        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </section>
  );
}
