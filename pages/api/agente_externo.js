let interacciones = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { agente, accion, contexto } = req.body;

    if (!agente || !accion || !contexto) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const registro = {
      agente,
      accion,
      contexto,
      fecha: new Date().toISOString(),
    };

    interacciones.push(registro);
    console.log(`🌐 Interacción externa: ${JSON.stringify(registro)}`);

    return res.status(200).json({ status: 'ok', registro });
  }

  if (req.method === 'GET') {
    return res.status(200).json(interacciones);
  }

  res.status(405).json({ error: 'Método no permitido' });
}
