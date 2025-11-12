export default function ReplicadorRemi() {
  const entornos = ['Legal', 'Financiero', 'Educativo', 'Histórico'];

  return (
    <div>
      <h2>🧬 Replicación Patrimonial</h2>
      <ul>
        {entornos.map((e, i) => (
          <li key={i}>
            REMI puede replicarse como agente ceremonial en entornos <strong>{e}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
