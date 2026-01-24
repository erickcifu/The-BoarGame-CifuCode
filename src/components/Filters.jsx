export default function Filters({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 mb-10">
      {/* filtro por categorias */}
      <select
        className="bg-black border rounded-lg px-4 py-2"
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      >
        <option value="">Todas las categorías</option>
        <option value="Estrategia">Estrategia</option>
        <option value="Familiares">Familiares</option>
        <option value="Party Games">Party Games</option>
      </select>
        {/* filtro por raitin */}
      <select
        className="bg-black border rounded-lg px-4 py-2"
        value={filters.rating}
        onChange={(e) =>
          setFilters({ ...filters, rating: Number(e.target.value) })
        }
      >
        <option value={0}>Cualquier rating</option>
        <option value={3}>⭐ 3+</option>
        <option value={4}>⭐ 4+</option>
        <option value={4.5}>⭐ 4.5+</option>
      </select>
        {/* filtro de precio */}
      <select
        className="bg-black border rounded-lg px-4 py-2"
        value={filters.price}
        onChange={(e) =>
          setFilters({ ...filters, price: Number(e.target.value) })
        }
      >
        <option value={0}>Cualquier precio</option>
        <option value={10}>Hasta Q20</option>
        <option value={20}>Hasta Q20</option>
        <option value={30}>Hasta Q30</option>
      </select>
    </div>
  );
}
