export default function FiltroBar({ filtro, setFiltro }) {
  const opciones = [
    { valor: "todas", etiqueta: "Todas" },
    { valor: "pendientes", etiqueta: "Pendientes" },
    { valor: "completadas", etiqueta: "Completadas" },
  ];

  return (
    <div className="filtro-bar">
      {opciones.map(({ valor, etiqueta }) => (
        <button
          key={valor}
          className={`filtro-bar__btn ${filtro === valor ? "activo" : ""}`}
          onClick={() => setFiltro(valor)}
        >
          {etiqueta}
        </button>
      ))}
    </div>
  );
}