export default function ArchivadorRemi() {
  const archivados = [
    { id: 1, tipo: 'Fork', agente: 'REMI_Auditor', fecha: '2025-11-09T18:00:00Z' },
    { id: 2, tipo: 'Token', agente: 'REMI_Legal', fecha: '2025-11-09T18:30:00Z' },
  ];

  return (
    <div>
      <h2>📁 Archivos Patrimoniales Cerrados</h2>
      <ul>
        {archivados.map((a, i) => (
          <li key={i}>
            {a.tipo} archivado por {a.agente} el {a.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}
