import { useState } from 'react';

export default function PostgresSender({ user, token }) {
  const [status, setStatus] = useState('');

  const sendToPostgres = async () => {
    try {
      const res = await fetch('/api/postgres_sim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, token }),
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      setStatus('Error al registrar en Postgres simulado');
    }
  };

  return (
    <div>
      <button onClick={sendToPostgres}>Registrar token en Postgres</button>
      <p>{status}</p>
    </div>
  );
}
