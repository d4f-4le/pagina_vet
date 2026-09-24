const servicios = [
  {
    titulo: "Consulta general",
    descripcion:
      "Evaluación completa de salud, revisión de peso, temperatura y signos vitales para detectar cualquier molestia a tiempo.",
    icono: "🩺",
  },
  {
    titulo: "Vacunación y desparasitación",
    descripcion:
      "Planes de inmunización según especie y edad, con carné digital para que nunca pierdas el control de las dosis.",
    icono: "💉",
  },
  {
    titulo: "Cirugía y esterilización",
    descripcion:
      "Quirófano equipado y protocolos de anestesia segura para procedimientos ambulatorios y de mayor complejidad.",
    icono: "🏥",
  },
  {
    titulo: "Estética y grooming",
    descripcion:
      "Baño medicado, corte de pelo y cuidado de uñas, adaptado a la piel y el temperamento de cada mascota.",
    icono: "✂️",
  },
  {
    titulo: "Diagnóstico por imágenes",
    descripcion:
      "Radiografía y ecografía digital para llegar a un diagnóstico preciso sin exponer a tu mascota a esperas largas.",
    icono: "📷",
  },
  {
    titulo: "Emergencias 24 horas",
    descripcion:
      "Línea de atención inmediata y sala de urgencias disponible todos los días del año, incluidos feriados.",
    icono: "🚑",
  },
];

export const Servicios = () => {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-bosque sm:text-4xl">
          Todo lo que tu mascota necesita, en un solo lugar
        </h2>
        <p className="mt-4 text-piedra">
          Diseñamos cada servicio pensando en reducir el estrés de la visita,
          tanto para tu mascota como para ti.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <div
            key={servicio.titulo}
            className="rounded-3xl border border-bosque/10 bg-white p-8 transition-shadow hover:shadow-lg"
          >
            <span className="text-3xl">{servicio.icono}</span>
            <h3 className="mt-5 font-display text-xl font-semibold text-bosque">
              {servicio.titulo}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-piedra">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
