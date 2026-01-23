export default function GameGridSkeleton() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-10">
        Cargando juegos...
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-white rounded-2xl shadow overflow-hidden"
          >
            <div className="h-48 bg-gray-200"></div>

            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>

              <div className="flex justify-between mt-4">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-10"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
