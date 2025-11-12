export default function CeremonialRemi() {
  const frases = [
    '🕊️ Cada token registrado honra el legado de su custodio.',
    '📜 Cada fork patrimonial representa una bifurcación de memoria ceremonial.',
    '🧠 Cada auditoría valida el compromiso con la verdad patrimonial.',
  ];

  return (
    <div>
      <h2>🎓 Cierre Ceremonial</h2>
      <ul>
        {frases.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
