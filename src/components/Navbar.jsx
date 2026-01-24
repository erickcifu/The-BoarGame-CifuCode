"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 border-b">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          🎲 The Board Game CifuCode
        </h1>

        {/* menu de escritorio */}
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
            <a href="#explorar" className="hover:text-blue-400">
              Explorar
            </a>
          </li>
        </ul>

        {/* boton para telefono*/}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* menu del movil en forma vertical*/}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-sm">
          <li>
            <a
              href="#catalogo"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400"
            >
              Catálogo
            </a>
          </li>
          <li>
            <a
              href="#sponsors"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400"
            >
              Sponsors
            </a>
          </li>
          <li>
            <a
              href="#explorar"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400"
            >
              Explorar
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
