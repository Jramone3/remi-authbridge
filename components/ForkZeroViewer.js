import { useEffect, useState } from 'react';

export default function ForkZeroViewer() {
  const [forks, setForks] = useState([]);

  useEffect(() => {
    fetch('/api/fork_zero')
      .then(res => res.json())
      .then(data => setForks(data));
  }, []);

  return (
    <div>
      <h2>🧬 Forks Zero-Copy</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Original</th>
            <th>Forked By</th>
            <th>Tipo</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {forks.map((f, i) => (
            <tr key={i}>
              <td>{f.sourceUser}</td>
              <td>{f.forkedBy}</td>
              <td>{f.tipo}</td>
              <td>{f.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
