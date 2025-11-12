let registros = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { user, token, agente } = req.body;
    const registro = {
      user,
      token,
      agente,
      fecha: new Date().toISOString(),
    };
    registros.push(registro);
    return res.status(200).json({ status: 'ok', registro });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ registros });
  }

  res.status(405).json({ error: 'Método no permitido' });
}
