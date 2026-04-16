import TareaCard from "./TareaCard";

export default function ListaTareas({ tareas }) {
  if (tareas.length === 0) {
    return <p className="lista-tareas__vacia">No hay tareas para mostrar.</p>;
  }

  return (
    <div className="lista-tareas">
      {tareas.map((tarea) => (
        <TareaCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}