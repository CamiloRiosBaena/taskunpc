import { useTareas } from "../context/TareasContext";

export default function TareaCard({ tarea }) {
  const { titulo, materia, fecha, completada, id } = tarea;
  const { toggleTarea } = useTareas();

  const fechaFormateada = new Date(fecha + "T00:00:00").toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`tarea-card ${completada ? "completada" : "pendiente"}`}
      style={{ opacity: completada ? 0.6 : 1, transition: "opacity 0.2s" }}>
      <div className="tarea-card__header">
        <h3 className="tarea-card__titulo"
          style={{ textDecoration: completada ? "line-through" : "none" }}>
          {titulo}
        </h3>
        <span className={`tarea-card__badge ${completada ? "badge--completada" : "badge--pendiente"}`}>
          {completada ? "Completada" : "Pendiente"}
        </span>
      </div>

      <div className="tarea-card__meta">
        <p className="tarea-card__materia">📚 {materia}</p>
        <p className="tarea-card__fecha">📅 {fechaFormateada}</p>
      </div>

      <button
        className="tarea-card__toggle"
        onClick={() => toggleTarea(id)}
      >
        {completada ? "↩ Marcar pendiente" : "✓ Marcar completada"}
      </button>
    </div>
  );
}