function ConsultaItemPage({idx, especialidade, medico, data, status}) {
    return(
        <li key={idx}>
            <strong>{especialidade}</strong> {medico} | {data} | ({status})
        </li>
    );
}

export default ConsultaItemPage;