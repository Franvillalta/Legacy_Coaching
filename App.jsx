import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Legacy Coaching</h1>
    </header>
  );
}

function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Bienvenido, Francisco</h2>
      <p className="mb-4">Estado del proceso: Sesión 3 de 8</p>
      <nav className="space-y-2">
        <Link className="block text-blue-600" to="/sesiones">Mis Sesiones</Link>
        <Link className="block text-blue-600" to="/reflexiones">Reflexiones</Link>
        <Link className="block text-blue-600" to="/recursos">Recursos</Link>
      </nav>
    </div>
  );
}

function Sesiones() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Mis Sesiones</h2>
      <ul className="list-disc list-inside">
        <li>Sesión 1 - 01/07/2025 - Propósito y legado</li>
        <li>Sesión 2 - 15/07/2025 - Narrativas del pasado</li>
        <li>Sesión 3 - 29/07/2025 - Identidad en transición</li>
      </ul>
    </div>
  );
}

function Reflexiones() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Reflexiones</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">¿Qué avance importante hiciste desde la última sesión?</label>
          <textarea className="w-full border rounded p-2" rows="3"></textarea>
        </div>
        <div>
          <label className="block font-medium">¿Qué obstáculo encontraste?</label>
          <textarea className="w-full border rounded p-2" rows="3"></textarea>
        </div>
        <div>
          <label className="block font-medium">¿Qué necesitas enfocar esta semana?</label>
          <textarea className="w-full border rounded p-2" rows="3"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
      </form>
    </div>
  );
}

function Recursos() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Recursos</h2>
      <ul className="list-disc list-inside">
        <li><a className="text-blue-600" href="#">Ejercicio - Línea de vida</a></li>
        <li><a className="text-blue-600" href="#">Plantilla de legado personal</a></li>
        <li><a className="text-blue-600" href="#">Guía de transición con propósito</a></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sesiones" element={<Sesiones />} />
        <Route path="/reflexiones" element={<Reflexiones />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </Router>
  );
}

export default App;
