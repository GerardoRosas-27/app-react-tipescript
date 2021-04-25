
import { Component, Fragment } from "react";
import { IState } from "../../models/stateDTO";
import TrPerson from "./TrPerson";

export default class TablePerson extends Component<IState> {

  render() {
    const { data, onNuevoUsuario, onUsuarioSelecionado, onEliminar } = this.props;
    console.log(data);
    return (
      <Fragment>
        <button onClick={onNuevoUsuario}>Nuevo usuario</button>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Matricula</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <TrPerson onEliminar={onEliminar} onUsuarioSelecionado={onUsuarioSelecionado} data={data}></TrPerson>
          </tbody>
        </table>
      </Fragment>
    );
  }

}
