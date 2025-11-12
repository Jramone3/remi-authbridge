import { useEffect, useState } from 'react';

export default function ForkViewer() {
  const [forks, setForks] = useState([]);

  useEffect(() => {
    fetch('/api/fork_remi')
      .then(res => res.json())
      .then(data => setForks(data));
  }, []);

  return (
    <div>
      <h2>🔀 Forks Patrimoniales</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Original</th>
            <th>Forked By</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {forks.map((f, i) => (
            <tr key={i}>
              <td>{f.id}</td>
              <td>{f.originalUser}</td>
              <td>{f.forkedBy}</td>
              <td>{f.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
