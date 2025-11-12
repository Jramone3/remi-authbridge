let forks = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { originalUser, forkedBy } = req.body;

    if (!originalUser || !forkedBy) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const fork = {
      originalUser,
      forkedBy,
      fecha: new Date().toISOString(),
      id: forks.length + 1,
    };

    forks.push(fork);
    console.log(`🔀 Fork patrimonial: ${JSON.stringify(fork)}`);

    return res.status(200).json({ status: 'ok', fork });
  }

  if (req.method === 'GET') {
    return res.status(200).json(forks);
  }

  res.status(405).json({ error: 'Método no permitido' });
}
