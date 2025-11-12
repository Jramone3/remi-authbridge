import { useEffect, useState } from 'react';

export default function AuditoriaViewer() {
  const [auditorias, setAuditorias] = useState([]);

  useEffect(() => {
    fetch('/api/auditoria_remi')
      .then(res => res.json())
      .then(data => setAuditorias(data));
  }, []);

  return (
    <div>
      <h2>🧾 Auditoría Patrimonial</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Fork ID</th>
            <th>Auditor</th>
            <th>Decisión</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {auditorias.map((a, i) => (
            <tr key={i}>
              <td>{a.forkId}</td>
              <td>{a.auditor}</td>
              <td>{a.decision}</td>
              <td>{a.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
