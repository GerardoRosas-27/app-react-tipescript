import TrPerson from "./TrPerson";

function TablePerson(): JSX.Element {
  return (
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido Paterno</th>
        <th>Apellido Materno</th>
      </tr>
      <TrPerson></TrPerson>
    </table>
  );
}

export default TablePerson;