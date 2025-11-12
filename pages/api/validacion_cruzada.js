let decisiones = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { agente, decision } = req.body;

    if (!agente || !decision) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const registro = {
      agente,
      decision,
      fecha: new Date().toISOString(),
    };

    decisiones.push(registro);
    console.log(`⚖️ Validación cruzada: ${JSON.stringify(registro)}`);

    return res.status(200).json({ status: 'ok', registro });
  }

  if (req.method === 'GET') {
    return res.status(200).json(decisiones);
  }

  res.status(405).json({ error: 'Método no permitido' });
}

