import { useNavigate } from "react-router-dom";

export default function BotonNuevo() {
  const navigate = useNavigate();

  return (
    <button
      className="boton-nuevo"
      onClick={() => navigate("/nueva")}
      aria-label="Agregar nueva tarea"
    >
      +
    </button>
  );
}