"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">
          🎲 The Board Game CifuCode
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <a href="#catalogo" className="hover:text-blue-500">
              Catálogo
            </a>
          </li>
          <li>
            <a href="#sponsors" className="hover:text-blue-500">
              Sponsors
            </a>
          </li>
          <li>
            <a href="#explorar" className="hover:text-blue-500">
              Explorar
            </a>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium px-2">
          <li>
            <a
              href="#catalogo"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-blue-500"
            >
              Catálogo
            </a>
          </li>
          <li>
            <a
              href="#sponsors"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-blue-500"
            >
              Sponsors
            </a>
          </li>
          <li>
            <a
              href="#explorar"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-blue-500"
            >
              Explorar
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
