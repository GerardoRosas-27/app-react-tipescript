import React, { Component } from 'react';
import FormPerson from './components/form/FormPerson';
import TablePerson from './components/table/TablePerson';
import { ListaPerson } from './models/PersonDTO';
import { IState } from './models/stateDTO';
import PersonService from './services/person.service';

export default class App extends Component {
  personSevice: PersonService = new PersonService();
  state: IState = {
    data: [],
    ruta: "lista",
  }



  onUsuarioSelecionado = (usuario: ListaPerson) => {
    console.log("Usuario selecionado: ", usuario);
    this.setState({
      ruta: 'form',
      usuario: usuario
    })
  }


  onNuevoUsuario = () => {
    this.setState({
      ruta: 'form',
      usuario: {}
    })
  }

  onGuardarUsuario = async (usuario: ListaPerson) => {
    console.log('data recibida:', usuario);
    const result = await this.personSevice.postPerson(usuario);
    console.log("response guardar:", result);
    if (result.status === 200) {
      const newUser = this.state.data?.concat(result.data.data);
      this.setState({
        data: newUser,
        ruta: 'lista'
      })
    } else {
      alert(result.data.mensaje);
    }

  }
  onActualizarUsuario = async (id: string, valores: ListaPerson) => {
    const result = await this.personSevice.putPerson(id, valores);
    console.log("response Actualizar: ", result);
    if (result.status === 200) {
      if (this.state.data) {
        const newData = this.state.data.map(x => x._id === id ? Object.assign(x, valores) : x);
        this.setState({
          ruta: 'lista',
          data: newData,
          usuario: {}
        })
      }
    } else {
      alert(result.data.mensaje);
    }
  }

  onEliminar = async (item: ListaPerson) => {
    const result = await this.personSevice.deletePerson(item);
    if (result.status === 200) {
      if (this.state.data) {
        const newData = this.eliminarFila(this.state.data, item);
        this.setState({
          ruta: 'lista',
          data: newData,
          usuario: {}
        })
      }
    }
  }
  render() {
    const { ruta, data, usuario } = this.state;
    return (
      <div>
        <h1>Lista de personas</h1>
        { ruta === 'lista' && <TablePerson data={data} onUsuarioSelecionado={this.onUsuarioSelecionado} onNuevoUsuario={this.onNuevoUsuario} onEliminar={this.onEliminar}></TablePerson>}
        { ruta === 'form' && <FormPerson onGuardarUsuario={this.onGuardarUsuario} usuario={usuario || {}} onActualizarUsuario={this.onActualizarUsuario}></FormPerson>}
      </div>
    );
  }

  eliminarFila(data: any, item: any) {
    const index = data.indexOf(item);
    data.splice(index, 1);
    return data;
  }

  async componentDidMount() {
    const usuarios = await this.personSevice.getPersons();
    console.log("cargar usuarios: ", usuarios.data.data);
    this.setState({ data: usuarios.data.data });
  }
}




