const testimonios = [
  {
    nombre: "Marcela Vargas",
    mascota: "dueña de Toby",
    texto:
      "Llevamos a Toby desde cachorro. Lo que más valoro es que siempre me explican las opciones antes de decidir por mí.",
  },
  {
    nombre: "Diego Torres",
    mascota: "dueño de Luna",
    texto:
      "Luna tuvo una cirugía delicada y el equipo nos llamó al día siguiente solo para preguntar cómo seguía. Eso no lo había visto en otra clínica.",
  },
  {
    nombre: "Gabriela Paredes",
    mascota: "dueña de Mia",
    texto:
      "La sala de hospitalización tiene cámaras que puedes revisar desde el celular. Me dio mucha tranquilidad durante la recuperación de Mia.",
  },
];

export const Testimonios = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-bosque sm:text-4xl">
            Lo que cuentan las familias que confían en Huellas
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.nombre}
              className="rounded-3xl bg-bosque-light p-8"
            >
              <p className="font-display text-4xl leading-none text-miel">
                "
              </p>
              <p className="mt-2 text-piedra">{testimonio.texto}</p>
              <p className="mt-6 font-semibold text-bosque">
                {testimonio.nombre}
              </p>
              <p className="text-sm text-piedra">{testimonio.mascota}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
