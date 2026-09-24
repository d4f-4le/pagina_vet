const imagenes = [
  { src: "https://images.pexels.com/photos/7470754/pexels-photo-7470754.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Veterinario examinando a un perro asistido por un colega" },
  { src: "https://images.pexels.com/photos/7469222/pexels-photo-7469222.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Chequeo de rutina a un perro en la clínica" },
  { src: "https://images.pexels.com/photos/7470752/pexels-photo-7470752.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Perro recibiendo un chequeo veterinario completo" },
  { src: "https://images.pexels.com/photos/7474851/pexels-photo-7474851.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Equipo veterinario realizando un chequeo en equipo" },
  { src: "https://images.pexels.com/photos/7469212/pexels-photo-7469212.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Voluntarios y veterinario atendiendo a un perro" },
  { src: "https://images.pexels.com/photos/7468980/pexels-photo-7468980.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Veterinario abrazando a un perro tras la consulta" },
];

export const Galeria = () => {
  return (
    <section id="galeria" className="bg-bosque-light py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold text-bosque sm:text-4xl">
              Un vistazo a nuestro día a día
            </h2>
            <p className="mt-3 max-w-xl text-piedra">
              Momentos reales de cuidado, pensados para reducir la ansiedad de
              las mascotas desde que cruzan la puerta.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {imagenes.map((imagen, indice) => (
            <div
              key={imagen.alt}
              className={`overflow-hidden rounded-2xl ${
                indice === 0 || indice === 3 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
