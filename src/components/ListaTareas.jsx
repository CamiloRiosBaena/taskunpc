import { tareasIniciales } from "../data/tareas";
import TareaCard from "./TareaCard";

export default function ListaTareas() {
  return (
    <div className="lista-tareas">
      {tareasIniciales.map((tarea) => (
        <TareaCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}