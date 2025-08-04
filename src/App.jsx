import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Legacy Coaching</h1>
    </header>
  );
}

function Registro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    etapa: "",
    proposito: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("coacheeData", JSON.stringify(form));
    navigate("/dashboard");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Registro del Coachee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2 rounded" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} required />
        <input className="w-full border p-2 rounded" name="correo" placeholder="Correo electrónico" value={form.correo} onChange={handleChange} required />
        <select className="w-full border p-2 rounded" name="etapa" value={form.etapa} onChange={handleChange} required>
          <option value="">Selecciona la etapa</option>
          <option value="Inicio">Inicio</option>
          <option value="Exploración">Exploración</option>
          <option value="Cierre">Cierre</option>
        </select>
        <textarea className="w-full border p-2 rounded" name="proposito" placeholder="¿Cuál es tu propósito en este proceso?" value={form.proposito} onChange={handleChange} rows="4" required></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Continuar</button>
      </form>
    </div>
  );
}

function Dashboard() {
  const coachee = JSON.parse(localStorage.getItem("coacheeData"));
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Hola, {coachee?.nombre || "Coachee"}</h2>
      <p className="mb-2">Etapa actual: {coachee?.etapa}</p>
      <p className="mb-4">Propósito: {coachee?.proposito}</p>
      <nav className="space-y-2">
        <Link className="block text-blue-600" to="/reflexiones">Reflexiones</Link>
        <Link className="block text-blue-600" to="/recursos">Recursos</Link>
      </nav>
    </div>
  );
}

function Reflexiones() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Reflexiones</h2>
      <p>Aquí irán tus reflexiones (esto se puede expandir en el siguiente paso).</p>
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
  const coachee = localStorage.getItem("coacheeData");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={coachee ? <Dashboard /> : <Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reflexiones" element={<Reflexiones />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </>
  );
}

export default App;
