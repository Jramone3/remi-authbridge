export default function OrquestadorRemi() {
  const agentes = ['REMI_Auditor', 'REMI_Legal', 'REMI_Educativo'];
  const decisiones = agentes.map((agente, i) => ({
    agente,
    decision: i % 2 === 0 ? 'Aprobado' : 'Revisar',
    fecha: new Date(Date.now() - i * 60000).toISOString(),
  }));

  return (
    <div>
      <h2>🧠 Orquestación Distribuida</h2>
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
