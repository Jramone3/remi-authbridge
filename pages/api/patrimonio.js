let memoriaPatrimonial = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { user, token, agente } = req.body;

    if (!user || !token || !agente) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const registro = {
      user,
      token,
      agente,
      fecha: new Date().toISOString(),
    };

    memoriaPatrimonial.push(registro);
    console.log(`📜 Registro patrimonial: ${JSON.stringify(registro)}`);

    return res.status(200).json({ status: 'ok', registro });
  }

  if (req.method === 'GET') {
    return res.status(200).json(memoriaPatrimonial);
  }

  res.status(405).json({ error: 'Método no permitido' });
}
