import { useEffect, useState } from 'react';

export default function FlujoTemporalViewer() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('/api/patrimonio')
      .then(res => res.json())
      .then(data => setEventos(data));
  }, []);

  return (
    <div>
      <h2>📈 Flujo Temporal Patrimonial</h2>
      <ul>
        {eventos.map((e, i) => (
          <li key={i}>
            <strong>{e.fecha}</strong> – {e.user} registró token con {e.agente}
          </li>
        ))}
      </ul>
    </div>
  );
}
