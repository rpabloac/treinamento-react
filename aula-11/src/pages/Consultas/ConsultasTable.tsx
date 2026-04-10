function ConsultasTable({ consultas }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Hora</th>
          <th>Médico</th>
          <th>Especialidade</th>
          <th>Status</th>
          <th>Local</th>
        </tr>
      </thead>
      <tbody>
        {consultas.map((consulta) => (
          <tr key={consulta.id}>
            <td>{consulta.data}</td>
            <td>{consulta.hora}</td>
            <td>{consulta.medico}</td>
            <td>{consulta.especialidade}</td>
            <td>{consulta.status}</td>
            <td>{consulta.local}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

}

export default ConsultasTable;