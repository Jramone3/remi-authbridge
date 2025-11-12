let auditoria = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { forkId, auditor, decision } = req.body;

    if (!forkId || !auditor || !decision) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const revision = {
      forkId,
      auditor,
      decision,
      fecha: new Date().toISOString(),
    };

    auditoria.push(revision);
    console.log(`🧾 Auditoría patrimonial: ${JSON.stringify(revision)}`);

    return res.status(200).json({ status: 'ok', revision });
  }

  if (req.method === 'GET') {
    return res.status(200).json(auditoria);
  }

  res.status(405).json({ error: 'Método no permitido' });
}
