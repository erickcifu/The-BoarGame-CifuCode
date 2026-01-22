export default function GameDetailSkeleton() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="h-80 bg-gray-200 rounded-xl"></div>

        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>

          <div className="space-y-2 mt-6">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
