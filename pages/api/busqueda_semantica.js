import { NextResponse } from 'next/server';

let registros = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { user, token, agente, decision } = req.body;
    const registro = {
      user,
      token,
      agente,
      decision,
      fecha: new Date().toISOString(),
    };
    registros.push(registro);
    return res.status(200).json({ status: 'ok', registro });
  }

  if (req.method === 'GET') {
    const { agente, decision } = req.query;
    const filtrados = registros.filter(r =>
      (!agente || r.agente === agente) &&
      (!decision || r.decision === decision)
    );
    return res.status(200).json(filtrados);
  }

  res.status(405).json({ error: 'Método no permitido' });
}
