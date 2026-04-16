export default function Header({ pendientes }) {
  return (
    <header className="header">
      <h1 className="header__titulo">📝 MisTareas</h1>
      <span className="header__pendientes">
        {pendientes} {pendientes === 1 ? "tarea pendiente" : "tareas pendientes"}
      </span>
    </header>
  );
}