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

      {/* GRID REAL */}
      <div className="grid md:grid-cols-2 gap-10 mt-8">
        
        {/* IMAGEN */}
        <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
          <Image
            src={game.image}
            alt={game.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4">
            {game.name}
          </h1>

          <ul className="space-y-3 text-base text-gray-700">
            <li><strong>Categoría:</strong> {game.category}</li>
            <li><strong>Valoración:</strong> ⭐ {game.rating}</li>
            <li><strong>Precio:</strong> Q{game.price}</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
