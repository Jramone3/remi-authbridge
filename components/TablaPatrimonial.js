// components/TablaPatrimonial.js

export default function TablaPatrimonial() {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>Tabla Patrimonial</h2>
      <table>
        <thead>
          <tr>
            <th>Módulo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nucleo_capasitor_ia</td>
            <td>✅ Activo</td>
          </tr>
          <tr>
            <td>archivos_personales</td>
            <td>✅ Activo</td>
          </tr>
          <tr>
            <td>documentacion</td>
            <td>⚠️ Pendiente</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
