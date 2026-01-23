import { sponsors } from "@/data/sponsors";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16 bg-black border-t">
      <h3 className="text-center text-gray-500 mb-8">
        Marcas que confían en nosotros
      </h3>

      <div className="flex justify-center gap-10 items-center">
        {sponsors.map((s) => (
          <Image
            key={s.id}
            src={s.logo}
            alt={s.name}
            width={120}
            height={60}
            className="grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
