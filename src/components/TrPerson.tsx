import { ListaPeson } from "../models/PersonDTO";

const nombres: ListaPeson[] = [
  {
    nombre: "Gerardo Gabriel",
    apellidoPaterno: "Rosas",
    apellidoMaterno: "Rodriguez",
  },
  {
    nombre: "Gerardo Gabriel 2",
    apellidoPaterno: "Rosas 2",
    apellidoMaterno: "Rodriguez 2",
  }
];

function TrPerson(): JSX.Element {
  return (
    <>
      {nombres.map((element) => (
        <tr>
          <td>{element.nombre}</td> <td>{element.apellidoPaterno}</td> <td>{element.apellidoMaterno}</td>
        </tr>
      ))}
    </>
  );
}

export default TrPerson;
