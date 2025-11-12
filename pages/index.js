import Head from 'next/head';
import PostgresSender from '../components/PostgresSender';
import { simulateAgentDialogue } from '../components/RemiAgents';
import TablaPatrimonial from '../components/TablaPatrimonial';
import ForkViewer from '../components/ForkViewer';
import ForkZeroViewer from '../components/ForkZeroViewer';
import AuditoriaViewer from '../components/AuditoriaViewer';
import FlujoTemporalViewer from '../components/FlujoTemporalViewer';
import OrquestadorRemi from '../components/OrquestadorRemi';
import InteraccionExternaViewer from '../components/InteraccionExternaViewer';
import ValidacionCruzadaViewer from '../components/ValidacionCruzadaViewer';
import NarrativaExportador from '../components/NarrativaExportador';
import ExportadorJSONViewer from '../components/ExportadorJSONViewer';
import ArchivadorRemi from '../components/ArchivadorRemi';
import CeremonialRemi from '../components/CeremonialRemi';
import ReplicadorRemi from '../components/ReplicadorRemi';
import RemiChat from '../components/RemiChat';

export default function Home() {
  const user = 'jramonrivasg';
  const token = 'ghp_remiPatrimonialToken2025';
  const dialogue = simulateAgentDialogue(user);

  return (
    <>
      <Head>
        <title>REMI AuthBridge</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>REMI AuthBridge – Patrimonial Identity Demo</h1>
        <p><strong>Usuario:</strong> {user}</p>
        <p><strong>Token protegido:</strong> {token}</p>

        <h2>🧠 Diálogo multi-agente</h2>
        <ul>
          {dialogue.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>

        <h2>💬 Chat con REMI</h2>
        <RemiChat />

        <h2>📘 Registro en Postgres simulado</h2>
        <PostgresSender user={user} token={token} />

        <h2>📜 Tabla Patrimonial</h2>
        <TablaPatrimonial />

        <h2>🔀 Forks Patrimoniales</h2>
        <ForkViewer />

        <h2>🧬 Forks Zero-Copy</h2>
        <ForkZeroViewer />

        <h2>🧾 Auditoría Patrimonial</h2>
        <AuditoriaViewer />

        <h2>📈 Flujo Temporal Patrimonial</h2>
        <FlujoTemporalViewer />

        <h2>🧠 Orquestación Distribuida</h2>
        <OrquestadorRemi />

        <h2>🌐 Interacciones con Agentes Externos</h2>
        <InteraccionExternaViewer />

        <h2>⚖️ Validación Cruzada</h2>
        <ValidacionCruzadaViewer />

        <h2>📜 Narrativa Exportada</h2>
        <NarrativaExportador />

        <h2>📦 Exportación JSON Patrimonial</h2>
        <ExportadorJSONViewer />

        <h2>📁 Archivos Patrimoniales Cerrados</h2>
        <ArchivadorRemi />

        <h2>🎓 Cierre Ceremonial</h2>
        <CeremonialRemi />

        <h2>🧬 Replicación Patrimonial</h2>
        <ReplicadorRemi />
      </main>
    </>
  );
}
