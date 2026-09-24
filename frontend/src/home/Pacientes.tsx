import Heading from "../components/Heading"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"

// 1. Define las propiedades exactas que vienen de la Base de Datos
export interface Paciente {
  id: number;
  nombre_mascota: string;
  especie: string;
  raza: string;
  propietario: string;
  servicio: string;
  fecha_atencion: string;
}

const queryClient = new QueryClient()

const PacientesContent = () => {

  const { data = [], isPending, isError } = useQuery<Paciente[]>({
    queryKey: ["Pacientes"],
    queryFn: () => fetch("http://danferch.alwaysdata.net/api/pacientes").then(r => {
      if (!r.ok) throw new Error("Error en la petición");
      return r.json();
    })
  })

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-3">
        <Heading level={2} className="text-muted">Últimos pacientes atendidos</Heading>
        {isPending ? (
          <p className="mt-4">Cargando...</p>
        ) : isError ? (
          <p className="mt-4 text-red-500">Error al conectar con el servidor.</p>
        ) : (
          <table className="w-full overflow-hidden bg-background rounded-2xl text-left text-sm shadow-sm mt-6">
            <thead className="bg-primary text-background">
              <tr>
                {["Mascota", "Especie", "Raza", "Propietario", "Servicio", "Fecha"].map(h => (
                  <th className="px-5 py-4 text-xs font-bold uppercase" key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map(({ id, nombre_mascota, especie, raza, propietario, servicio, fecha_atencion }) => (
                <tr key={id} className="hover:bg-surface-subtle transition-colors">
                  <td className="px-5 py-4 font-semibold text-primary">{nombre_mascota}</td>
                  <td className="px-5 py-4 text-primary">{especie}</td>
                  <td className="px-5 py-4 text-primary">{raza}</td>
                  <td className="px-5 py-4 text-primary">{propietario}</td>
                  <td className="px-5 py-4 text-primary">{servicio}</td>
                  <td className="px-5 py-4 text-primary">
                    {new Date(fecha_atencion).toLocaleDateString("es-ES")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export function Pacientes() {
  return (
    <QueryClientProvider client={queryClient}>
      <PacientesContent />
    </QueryClientProvider>
  )
}