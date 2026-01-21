"use client";

import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import Filters from "./Filters";
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
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-10">
        Catálogo de Juegos 🎲
      </h2>

      <Filters filters={filters} setFilters={setFilters} />

      {loading ? (
        <p className="text-gray-500">Cargando juegos...</p>
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
