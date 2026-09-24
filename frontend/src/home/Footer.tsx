export const Footer = () => {
  return (
    <footer className="bg-bosque-dark py-14 text-crema/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-xl font-semibold text-crema">
            Huellas
          </p>
          <p className="mt-3 text-sm">
            Clínica veterinaria integral en Lima, con más de una década
            cuidando mascotas y acompañando a sus familias.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-crema">Navegación</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#nosotros" className="hover:text-crema">Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-crema">Servicios</a></li>
            <li><a href="#equipo" className="hover:text-crema">Equipo</a></li>
            <li><a href="#pacientes" className="hover:text-crema">Pacientes</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-crema">Servicios</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Consulta general</li>
            <li>Vacunación</li>
            <li>Cirugía</li>
            <li>Emergencias 24 h</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-crema">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Av. Los Álamos 482, Surco, Lima</li>
            <li>(01) 456-7890</li>
            <li>contacto@huellasvet.pe</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 pt-6 text-xs text-crema/50 lg:px-10">
        <div className="border-t border-crema/10 pt-6">
          © 2026 Huellas Clínica Veterinaria. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
