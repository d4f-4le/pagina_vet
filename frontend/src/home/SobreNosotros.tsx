const valores = [
  {
    titulo: "Trato sin prisa",
    descripcion:
      "Cada consulta tiene el tiempo que necesita, sin importar si es una revisión rápida o un caso complejo.",
  },
  {
    titulo: "Medicina basada en evidencia",
    descripcion:
      "Seguimos protocolos actualizados y trabajamos con equipos de diagnóstico calibrados constantemente.",
  },
  {
    titulo: "Comunicación honesta",
    descripcion:
      "Te explicamos el diagnóstico y las opciones de tratamiento en un lenguaje claro, sin tecnicismos innecesarios.",
  },
];

export const SobreNosotros = () => {
  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg"
            alt="Veterinario revisando a un perro con estetoscopio en la clínica"
            className="col-span-2 h-64 w-full rounded-3xl object-cover"
          />
          <img
            src="https://images.pexels.com/photos/7470634/pexels-photo-7470634.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Veterinario examinando a un perro durante una consulta"
            className="h-40 w-full rounded-2xl object-cover"
          />
          <img
            src="https://images.pexels.com/photos/7474855/pexels-photo-7474855.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt="Voluntaria acariciando a un perro en la sala de consulta"
            className="h-40 w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-miel-dark">
            Sobre Huellas
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-bosque sm:text-4xl">
            Empezamos en un pequeño consultorio y hoy somos la clínica de
            confianza de miles de familias
          </h2>
          <p className="mt-5 text-piedra">
            Huellas nació en Surco en 2012 con un solo consultorio y un
            objetivo simple: que llevar a la mascota al veterinario dejara de
            ser una experiencia estresante. Hoy contamos con un equipo
            multidisciplinario, quirófano propio y una sala de hospitalización
            para casos que requieren observación permanente.
          </p>

          <div className="mt-8 space-y-6">
            {valores.map((valor) => (
              <div key={valor.titulo} className="flex gap-4">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-miel" />
                <div>
                  <p className="font-semibold text-bosque">{valor.titulo}</p>
                  <p className="mt-1 text-sm text-piedra">
                    {valor.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
