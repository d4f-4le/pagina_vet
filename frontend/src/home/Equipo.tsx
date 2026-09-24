const equipo = [
  {
    nombre: "Dra. Carolina Espinoza",
    especialidad: "Medicina interna",
    foto: "https://images.pexels.com/photos/6130978/pexels-photo-6130978.jpeg",
  },
  {
    nombre: "Dr. Mateo Cárdenas",
    especialidad: "Cirugía y traumatología",
    foto: "https://images.pexels.com/photos/7470633/pexels-photo-7470633.jpeg",
  },
  {
    nombre: "Dra. Ximena Loayza",
    especialidad: "Dermatología veterinaria",
    foto: "https://images.pexels.com/photos/6234602/pexels-photo-6234602.jpeg",
  },
  {
    nombre: "Dr. Iván Portugal",
    especialidad: "Medicina de emergencias",
    foto: "https://images.pexels.com/photos/6235225/pexels-photo-6235225.jpeg",
  },
];

export const Equipo = () => {
  return (
    <section id="equipo" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-bosque sm:text-4xl">
          El equipo detrás de cada consulta
        </h2>
        <p className="mt-4 text-piedra">
          Veterinarios colegiados, con especialidades complementarias, que se
          reúnen semanalmente para revisar los casos más delicados en conjunto.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {equipo.map((persona) => (
          <div key={persona.nombre} className="group text-center">
            <div className="mx-auto aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 font-display text-lg font-semibold text-bosque">
              {persona.nombre}
            </p>
            <p className="text-sm text-piedra">{persona.especialidad}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
