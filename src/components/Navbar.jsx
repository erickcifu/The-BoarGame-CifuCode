export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold">
        🎲 The Board Game CifuCode
      </h1>

      <ul className="hidden md:flex gap-6 text-sm">
        <li>
          <a href="#catalogo" className="hover:text-blue-400">
            Catálogo
          </a>
        </li>
        <li>
          <a href="#sponsors" className="hover:text-blue-400">
            Sponsors
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400">
            Explorar
          </a>
        </li>
      </ul>
    </nav>
  );
}
