const pasos = [
  {
    numero: "1",
    titulo: "Escríbenos o llama",
    descripcion:
      "Cuéntanos qué síntomas presenta tu mascota o qué servicio necesita.",
  },
  {
    numero: "2",
    titulo: "Elige fecha y horario",
    descripcion:
      "Te ofrecemos disponibilidad para el mismo día en la mayoría de los casos.",
  },
  {
    numero: "3",
    titulo: "Recibe la atención",
    descripcion:
      "Llega diez minutos antes y nuestro equipo se encargará del resto.",
  },
];

export const ComoAgendar = () => {
  return (
    <section className="bg-bosque-light py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-bosque sm:text-4xl">
            Agendar una cita toma menos de dos minutos
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {pasos.map((paso, indice) => (
            <div key={paso.numero} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-bosque font-display text-xl font-semibold text-crema">
                {paso.numero}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-bosque">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-sm text-piedra">{paso.descripcion}</p>
              {indice < pasos.length - 1 && (
                <span className="absolute right-[-20%] top-7 hidden h-px w-2/5 bg-bosque/20 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
