import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-black mb-4">404</h1>
      <p className="text-gray-500 mb-6">
        El juego que buscas no existe 🎲
      </p>
      <Link
        href="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold"
      >
        Volver al catálogo
      </Link>
    </div>
  );
}
