export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { user, token } = req.body;
    console.log(`🧠 Registro patrimonial: ${user} → ${token}`);
    return res.status(200).json({ status: 'ok', message: 'Token registrado en Postgres simulado' });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
