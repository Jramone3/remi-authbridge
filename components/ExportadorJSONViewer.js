import { useEffect, useState } from 'react';

export default function ExportadorJSONViewer() {
  const [json, setJson] = useState('');

  useEffect(() => {
    fetch('/api/exportar_json')
      .then(res => res.json())
      .then(data => setJson(JSON.stringify(data.registros, null, 2)));
  }, []);

  return (
    <div>
      <h2>📦 Exportación JSON Patrimonial</h2>
      <pre style={{ background: '#f4f4f4', padding: '1rem' }}>{json}</pre>
    </div>
  );
}
