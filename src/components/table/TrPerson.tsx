import React, { Component, Fragment } from "react";
import { ListaPerson } from "../../models/PersonDTO";
import { IState } from "../../models/stateDTO";

export default class TrPerson extends Component<IState> {

  editarUser = (item: ListaPerson) => (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onUsuarioSelecionado } = this.props;

    console.log("se le esta pazando el usuario: ", item);
    onUsuarioSelecionado(item);
  }
  eliminarUser = (item: ListaPerson) => (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onEliminar } = this.props;
    console.log("se le esta pazando el usuario: ", item);
    onEliminar(item);
  }

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        {data?.map((element: ListaPerson) => (
          <tr key={element._id}>
            <td>{element._id}</td>
            <td>{element.nombre}</td>
            <td>{element.apellidoPaterno}</td>
            <td>{element.apellidoMaterno}</td>
            <td>{element.telefono}</td>
            <td>{element.correo}</td>
            <td>{element.matricula}</td>
            <td>
              <button onClick={this.editarUser(element)}>Editar</button>
              <button onClick={this.eliminarUser(element)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </Fragment>
    );
  }

}


