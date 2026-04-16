import { tareasIniciales } from "./data/tareas";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

function App() {
  const pendientes = tareasIniciales.filter((t) => !t.completada).length;

  return (
    <div>
      <Header pendientes={pendientes} />
      <ListaTareas />
    </div>
  );
}

export default App;