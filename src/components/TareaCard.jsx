export default function TareaCard({ tarea }) {
  const { titulo, materia, fecha, completada } = tarea;

  const fechaFormateada = new Date(fecha + "T00:00:00").toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`tarea-card ${completada ? "completada" : "pendiente"}`}>
      <div className="tarea-card__header">
        <h3 className="tarea-card__titulo">{titulo}</h3>
        <span className={`tarea-card__badge ${completada ? "badge--completada" : "badge--pendiente"}`}>
          {completada ? "Completada" : "Pendiente"}
        </span>
      </div>

      <div className="tarea-card__meta">
        <p className="tarea-card__materia">📚 {materia}</p>
        <p className="tarea-card__fecha">📅 {fechaFormateada}</p>
      </div>
    </div>
  );
}