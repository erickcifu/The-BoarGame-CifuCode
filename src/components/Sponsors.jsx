/* eslint-disable @next/next/no-img-element */

import { sponsors } from "@/data/sponsors";

export default function Sponsors() {
  return (
    <section className="py-16 bg-black border-t">
      <h3 className="text-center text-gray-500 mb-8">
        Marcas que confían en nosotros
      </h3>

      <div className="flex justify-center gap-10 items-center">
        {sponsors.map((s) => (
          <img key={s.id} src={s.logo} alt={s.name} className="h-25 grayscale hover:grayscale-0 transition"/>
        ))}
      </div>
    </section>
  );
}
