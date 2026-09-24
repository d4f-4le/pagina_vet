import { useEffect, useState } from "react";

const enlaces = [
  { texto: "Inicio", href: "#inicio" },
  { texto: "Nosotros", href: "#nosotros" },
  { texto: "Servicios", href: "#servicios" },
  { texto: "Equipo", href: "#equipo" },
  { texto: "Galería", href: "#galeria" },
  { texto: "Pacientes", href: "#pacientes" },
  { texto: "Contacto", href: "#contacto" },
];

export const Header = () => {
  const [conFondo, setConFondo] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const alDesplazar = () => setConFondo(window.scrollY > 24);
    window.addEventListener("scroll", alDesplazar);
    return () => window.removeEventListener("scroll", alDesplazar);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        conFondo ? "bg-crema/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bosque text-crema">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <circle cx="8" cy="7" r="2.2" />
              <circle cx="16" cy="7" r="2.2" />
              <circle cx="5" cy="13" r="1.8" />
              <circle cx="19" cy="13" r="1.8" />
              <ellipse cx="12" cy="16.5" rx="5" ry="3.8" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold text-bosque">
            Huellas
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="text-sm font-medium text-tinta/80 transition-colors hover:text-bosque"
            >
              {enlace.texto}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="text-sm font-semibold text-bosque">
            (01) 456-7890
          </span>
          <a
            href="#contacto"
            className="rounded-full bg-miel px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Agendar cita
          </a>
        </div>

        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bosque/20 lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-bosque">{menuAbierto ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuAbierto && (
        <div className="flex flex-col gap-1 bg-crema px-6 pb-6 lg:hidden">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              onClick={() => setMenuAbierto(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-tinta hover:bg-bosque-light"
            >
              {enlace.texto}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuAbierto(false)}
            className="mt-2 rounded-full bg-miel px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Agendar cita
          </a>
        </div>
      )}
    </header>
  );
};
