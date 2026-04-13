function ExamesTable({ exames }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {exames.map((exame) => (
          <tr key={exame.id}>
            <td>{exame.tipo}</td>
            <td>{exame.data}</td>
            <td>{exame.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExamesTable;