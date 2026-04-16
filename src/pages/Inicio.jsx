import { useState } from "react";
import Header from "../components/Header";
import FiltroBar from "../components/FiltroBar";
import ListaTareas from "../components/ListaTareas";
import BotonNuevo from "../components/BotonNuevo";
import { useTareas } from "../context/TareasContext";

export default function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const pendientes = tareas.filter((t) => !t.completada).length;

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div className="pagina">
      <Header pendientes={pendientes} />
      <FiltroBar filtro={filtro} setFiltro={setFiltro} />
      <ListaTareas tareas={tareasFiltradas} />
      <BotonNuevo />
    </div>
  );
}