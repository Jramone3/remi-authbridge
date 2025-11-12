let auditoria = [];

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { forkId } = req.body;
    auditoria = auditoria.filter(a => a.forkId !== forkId);
    console.log(`⏪ Rollback patrimonial aplicado al fork ${forkId}`);
    return res.status(200).json({ status: 'rollback aplicado', forkId });
  }

  res.status(405).json({ error: 'Método no permitido' });
}
