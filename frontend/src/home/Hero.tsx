const estadisticas = [
  { numero: "12,400+", etiqueta: "mascotas atendidas" },
  { numero: "14", etiqueta: "años cuidando familias" },
  { numero: "9", etiqueta: "veterinarios certificados" },
  { numero: "24/7", etiqueta: "atención de emergencias" },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-bosque-light pt-32 pb-20 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-bosque shadow-sm">
            Clínica veterinaria en Lima desde 2012
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-bosque sm:text-5xl lg:text-6xl">
            Cuidamos a tu mascota como si fuera parte de{" "}
            <span className="italic text-miel-dark">nuestra propia familia</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-piedra">
            En Huellas combinamos medicina veterinaria moderna con un trato
            cercano y paciente. Consultas, cirugías, vacunación y emergencias,
            todo bajo un mismo techo pensado para el bienestar de tu compañero.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-bosque px-7 py-3.5 text-sm font-semibold text-crema shadow-md transition-transform hover:-translate-y-0.5"
            >
              Reservar una consulta
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-bosque/30 px-7 py-3.5 text-sm font-semibold text-bosque transition-colors hover:bg-white"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {estadisticas.map((dato) => (
              <div key={dato.etiqueta}>
                <p className="font-display text-2xl font-semibold text-bosque">
                  {dato.numero}
                </p>
                <p className="mt-1 text-xs text-piedra">{dato.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden shadow-xl"
            style={{ borderRadius: "58% 42% 63% 37% / 41% 47% 53% 59%" }}
          >
            <img
              src="https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Veterinario revisando y calmando a un perro en el consultorio"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-lg sm:block">
            <p className="font-display text-lg font-semibold text-bosque">
              Cita confirmada
            </p>
            <p className="mt-1 text-xs text-piedra">
              Toby · control de vacunas hoy a las 4:30 p. m.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
