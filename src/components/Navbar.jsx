export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold">
        🎲 The Board Game CifuCode
      </h1>

      <ul className="hidden md:flex gap-6 text-sm">
        <li className="cursor-pointer hover:text-blue-400">Catálogo</li>
        <li className="cursor-pointer hover:text-blue-400">Sponsors</li>
        <li className="cursor-pointer hover:text-blue-400">Explorar</li>
      </ul>
    </nav>
  );
}
