'use client';

import { conectarAgenticPostgres, registrarEvento } from '../lib/agentic_postgres';

export default function Page() {
  const conexion = conectarAgenticPostgres();
  const registro = registrarEvento("Despliegue patrimonial validado");

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>REMI AuthBridge</h1>
      <p><strong>Estado de conexión:</strong> {conexion.status}</p>
      <p><strong>Agente:</strong> {conexion.agente}</p>
      <p><strong>Directivas:</strong> {conexion.directivas.join(", ")}</p>
      <p><strong>Último evento:</strong> {registro.evento}</p>
      <p><strong>Timestamp:</strong> {registro.timestamp}</p>
    </main>
  );
}
