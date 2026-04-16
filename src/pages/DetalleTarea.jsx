import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

export default function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find((t) => t.id === Number(id));

  if (!tarea) {
    return (
      <div className="detalle-page">
        <p>Tarea no encontrada.</p>
        <button className="btn-ghost" onClick={() => navigate("/")}>Volver</button>
      </div>
    );
  }

  const fechaFormateada = new Date(tarea.fecha + "T00:00:00").toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function handleEliminar() {
    eliminarTarea(tarea.id);
    navigate("/");
  }

  return (
    <div className="detalle-page">
      <button className="btn-back" onClick={() => navigate("/")}>← Volver</button>
      <h2>{tarea.titulo}</h2>
      <div className="detalle-info">
        <p><strong>Materia:</strong> {tarea.materia}</p>
        <p><strong>Fecha:</strong> {fechaFormateada}</p>
        <p><strong>Estado:</strong> {tarea.completada ? "Completada ✓" : "Pendiente"}</p>
      </div>
      <div className="detalle-acciones">
        <button className="btn-danger" onClick={handleEliminar}>Eliminar tarea</button>
      </div>
    </div>
  );
}
