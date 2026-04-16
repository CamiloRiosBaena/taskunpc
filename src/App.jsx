import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { TareasProvider } from "./context/TareasContext";
import Inicio from "./pages/Inicio";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";

function App() {
  return (
    <TareasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nueva" element={<NuevaTarea />} />
          <Route path="/tarea/:id" element={<DetalleTarea />} />
        </Routes>
      </BrowserRouter>
    </TareasProvider>
  );
}

export default App;