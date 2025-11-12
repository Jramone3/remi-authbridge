import { useEffect, useState } from 'react';

export default function NarrativaExportador() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    fetch('/api/patrimonio')
      .then(res => res.json())
      .then(data => setRegistros(data));
  }, []);

  return (
    <div>
      <h2>📜 Narrativa Patrimonial Exportada</h2>
      <ul>
        {registros.map((r, i) => (
          <li key={i}>
            En {r.fecha}, el agente <strong>{r.agente}</strong> registró el token de <strong>{r.user}</strong> como parte del legado patrimonial.
          </li>
        ))}
      </ul>
    </div>
  );
}
