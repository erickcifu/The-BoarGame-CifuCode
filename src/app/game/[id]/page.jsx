export const dynamic = "force-dynamic";
import Image from "next/image";
import { games } from "@/data/games";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function GameDetail({ params }) {
  const { id } = await params;

  await new Promise((res) => setTimeout(res, 1200));

  const game = games.find((g) => String(g.id) === id);
  if (!game) notFound();

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm text-gray-500 hover:underline">
        ← Volver al catálogo
      </Link>

      {/* Grid real */}
      <div className="grid md:grid-cols-2 gap-10 mt-8">

        {/* Imagen */}
        <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
          <Image
            src={game.image}
            alt={game.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* texo */}
        <div className="flex flex-col justify-center">

          {/* titulo y destacado */}
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-extrabold">
              {game.name}
            </h1>

            {game.featured && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                👑 Juego destacado
              </span>
            )}
          </div>

          <ul className="space-y-3 text-base text-gray-700">
            <li><strong>Categoría:</strong> {game.category}</li>
            <li><strong>Valoración:</strong> ⭐ {game.rating}</li>
            <li><strong>Precio:</strong> Q{game.price}</li>
          </ul>

          {/* Requisito oculto */}
          <p className="hidden">hecho por CifuCode</p>
        </div>

      </div>
    </section>
  );
}
