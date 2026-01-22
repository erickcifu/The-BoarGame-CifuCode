export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white rounded-2xl shadow overflow-hidden">
      {/* Imagen */}
      <div className="h-48 bg-gray-200"></div>

      {/* Texto */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>

        <div className="flex justify-between mt-4">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-10"></div>
        </div>
      </div>
    </div>
  );
}

