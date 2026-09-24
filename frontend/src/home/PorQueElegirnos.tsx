const razones = [
  {
    titulo: "Historial clínico digital",
    descripcion:
      "Accede al historial de vacunas, tratamientos y exámenes de tu mascota desde cualquier dispositivo.",
  },
  {
    titulo: "Precios claros desde el inicio",
    descripcion:
      "Antes de cualquier procedimiento recibes un presupuesto detallado, sin cobros sorpresa al final.",
  },
  {
    titulo: "Ambulancia veterinaria",
    descripcion:
      "Para emergencias que lo requieran, contamos con traslado asistido dentro de Lima Metropolitana.",
  },
  {
    titulo: "Seguimiento post consulta",
    descripcion:
      "Te escribimos a las 48 horas de cada tratamiento importante para confirmar que tu mascota evoluciona bien.",
  },
];

export const PorQueElegirnos = () => {
  return (
    <section className="bg-bosque py-24 text-crema">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Razones por las que las familias se quedan con nosotros
          </h2>
          <p className="mt-4 text-crema/75">
            No medimos nuestro trabajo solo por el diagnóstico correcto, sino
            por cómo se siente la experiencia completa para ti y tu mascota.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {razones.map((razon) => (
            <div key={razon.titulo} className="border-t border-crema/20 pt-6">
              <h3 className="font-display text-lg font-semibold">
                {razon.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-crema/70">
                {razon.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
