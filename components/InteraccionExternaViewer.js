import { useEffect, useState } from 'react';

export default function InteraccionExternaViewer() {
  const [interacciones, setInteracciones] = useState([]);

  useEffect(() => {
    fetch('/api/agente_externo')
      .then(res => res.json())
      .then(data => setInteracciones(data));
  }, []);

  return (
    <div>
      <h2>🌐 Interacciones con Agentes Externos</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Agente</th>
            <th>Acción</th>
            <th>Contexto</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {interacciones.map((i, idx) => (
            <tr key={idx}>
              <td>{i.agente}</td>
              <td>{i.accion}</td>
              <td>{i.contexto}</td>
              <td>{i.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
