import { useEffect, useState } from 'react';

export default function ValidacionCruzadaViewer() {
  const [decisiones, setDecisiones] = useState([]);

  useEffect(() => {
    fetch('/api/validacion_cruzada')
      .then(res => res.json())
      .then(data => setDecisiones(data));
  }, []);

  return (
    <div>
      <h2>⚖️ Validación Cruzada de Agentes</h2>
      <ul>
        {decisiones.map((d, i) => (
          <li key={i}>
            <strong>{d.fecha}</strong> – {d.agente} → {d.decision}
          </li>
        ))}
      </ul>
    </div>
  );
}
