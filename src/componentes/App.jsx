import React from "react";
import Button_login from "./Button_login/Button_login";
import Registro from "./Registro/Registro";
import Pagina_inicio from "./Pagina_inicio/Pagina_inicio";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Button_login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Home" element={<Pagina_inicio />} />
      </Routes>
    </div>
  );
}

export default App;
