import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

export default function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();

  const [form, setForm] = useState({ titulo: "", materia: "", fecha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo || !form.materia || !form.fecha) return;
    agregarTarea(form);
    navigate("/");
  }

  return (
    <div className="form-page">
      <button className="btn-back" onClick={() => navigate("/")}>← Volver</button>
      <h2>Nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grupo">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Ej: Parcial de Cálculo"
          />
        </div>
        <div className="form-grupo">
          <label htmlFor="materia">Materia</label>
          <input
            id="materia"
            name="materia"
            type="text"
            value={form.materia}
            onChange={handleChange}
            placeholder="Ej: Matemáticas"
          />
        </div>
        <div className="form-grupo">
          <label htmlFor="fecha">Fecha límite</label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            value={form.fecha}
            onChange={handleChange}
          />
        </div>
        <div className="form-acciones">
          <button type="submit" className="btn-primary">Agregar tarea</button>
          <button type="button" className="btn-ghost" onClick={() => navigate("/")}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
