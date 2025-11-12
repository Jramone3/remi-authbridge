import { useState } from 'react';

export default function RemiChat() {
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const enviar = async () => {
    const res = await fetch('/api/remi_chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensaje }),
    });
    const data = await res.json();
    setRespuesta(data.respuesta);
  };

  return (
    <div>
      <h2>💬 Chat con REMI</h2>
      <input
        type="text"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button onClick={enviar}>Enviar</button>
      <p>{respuesta}</p>
    </div>
  );
}
