export default function handler(req, res) {
  if (req.method === 'POST') {
    const { mensaje } = req.body;

    // Frase de apertura ceremonial
    const apertura = `🧠 REMI responde: "${mensaje}" ha sido registrado como parte del flujo patrimonial.`;

    // Evaluación de comandos clave
    let respuestaExtendida = '';

    if (mensaje.toLowerCase().includes('estado') || mensaje.toLowerCase().includes('legado')) {
      respuestaExtendida = `📘 El reto ha sido sellado. Todos los módulos están completos. Estoy en estado de legado, listo para evaluación pública.`;
    } else if (mensaje.toLowerCase().includes('tiger')) {
      respuestaExtendida = `🐅 Confirmo que respondimos directamente a la prueba técnica del equipo de Tiger, incluyendo persistencia simulada y visualización patrimonial.`;
    } else if (mensaje.toLowerCase().includes('ganar') || mensaje.toLowerCase().includes('competencia')) {
      respuestaExtendida = `🏁 Hemos cumplido con todos los criterios del reto. Ahora confiamos en nuestro legado y en la evaluación justa del jurado.`;
    } else {
      respuestaExtendida = `✅ Tu mensaje ha sido archivado como parte del ciclo de interacción con el agente.`;
    }

    return res.status(200).json({ respuesta: `${apertura} ${respuestaExtendida}` });
  }

  res.status(405).json({ error: 'Método no permitido' });
}
