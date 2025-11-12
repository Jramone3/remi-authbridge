let zeroForks = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sourceUser, forkedBy } = req.body;

    if (!sourceUser || !forkedBy) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const fork = {
      sourceUser,
      forkedBy,
      tipo: 'Zero-Copy',
      fecha: new Date().toISOString(),
    };

    zeroForks.push(fork);
    console.log(`🧬 Fork Zero-Copy: ${JSON.stringify(fork)}`);

    return res.status(200).json({ status: 'ok', fork });
  }

  if (req.method === 'GET') {
    return res.status(200).json(zeroForks);
  }

  res.status(405).json({ error: 'Método no permitido' });
}
