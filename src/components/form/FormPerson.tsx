import React, { Component } from "react";
import { ListaPerson } from "../../models/PersonDTO";
import { IState } from "../../models/stateDTO";

export default class FormPerson extends Component<IState> {

    state: ListaPerson = {}
    enviarForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { usuario, onGuardarUsuario, onActualizarUsuario } = this.props;
        console.log(e);
        if (usuario?._id) {
            //actualizando usuario
            onActualizarUsuario(usuario._id, this.state)
        } else {
            //guardando nuevo usuario
            console.log('entro mandar a guardar usuario:', this.state)
            onGuardarUsuario(this.state);
        }
        this.setState({});
    }

    cambioText = (input: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [input.target.name]: input.target.value
        })
    }

    render() {
        const { usuario } = this.props;
        return (
            <form onSubmit={this.enviarForm}>
                <input defaultValue={usuario?.nombre} name="nombre" onChange={this.cambioText} type="text" />
                <input defaultValue={usuario?.apellidoPaterno} name="apellidoPaterno" onChange={this.cambioText} type="text" />
                <input defaultValue={usuario?.apellidoMaterno} name="apellidoMaterno" onChange={this.cambioText} type="text" />
                <input defaultValue={usuario?.telefono} name="telefono" onChange={this.cambioText} type="text" />
                <input defaultValue={usuario?.correo} name="correo" onChange={this.cambioText} type="text" />
                <input defaultValue={usuario?.matricula} name="matricula" onChange={this.cambioText} type="text" />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}