'use client';

import { conectarAgenticPostgres, registrarEvento } from '../lib/agentic_postgres';

export default function Page() {
  const conexion = conectarAgenticPostgres();
  const registro = registrarEvento("Despliegue patrimonial validado");

  const eventos = [
    { tipo: "discernimiento", fecha: "2025-10-22" },
    { tipo: "autorización total documental", fecha: "2025-11-06" },
    { tipo: "estructura de memoria MongoDB", fecha: "2025-11-06" },
  ];

  const estructuraMongoDB = {
    tipo: "autorizacion",
    fecha: "2025-11-09",
    origen: "REMI AuthBridge",
  };

  const registrarEventoManual = () => {
    alert("✅ Evento patrimonial registrado (simulado)");
  };

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>REMI AuthBridge</h1>

      <section>
        <h2>🎯 Propósito Patrimonial</h2>
        <p>
          REMI AuthBridge es una demostración patrimonial que simula la conexión
          de un agente operativo con Agentic Postgres como cerebro estructurado.
          Representa la consolidación de un entorno técnico, narrativo y ceremonial.
        </p>
      </section>

      <section>
        <h2>📡 Conexión Agentica</h2>
        <p><strong>Estado de conexión:</strong> {conexion.status}</p>
        <p><strong>Agente:</strong> {conexion.agente}</p>
        <p><strong>Directivas:</strong> {conexion.directivas.join(", ")}</p>
        <p><strong>Último evento:</strong> {registro.evento}</p>
        <p><strong>Timestamp:</strong> {registro.timestamp}</p>
      </section>

      <section>
        <h2>📜 Eventos Patrimoniales</h2>
        <ul>
          {eventos.map((evento, index) => (
            <li key={index}>
              {evento.fecha} – {evento.tipo}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🧠 Estructura MongoDB simulada</h2>
        <pre>{JSON.stringify(estructuraMongoDB, null, 2)}</pre>
      </section>

      <section>
        <h2>🛠️ Interacción Patrimonial</h2>
        <button onClick={registrarEventoManual}>Registrar nuevo evento</button>
      </section>

      <section>
        <h2>🏆 Agente Patrimonial</h2>
        <img src="/remi_logo.png" alt="Logo REMI" width="120" />
      </section>
    </main>
  );
}
