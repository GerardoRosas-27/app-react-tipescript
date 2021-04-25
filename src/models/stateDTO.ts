import { ListaPerson } from "./PersonDTO";

export interface IState {
    data?: ListaPerson[];
    ruta?: string;
    usuario?: ListaPerson;
    onGuardarUsuario?: any;
    onActualizarUsuario?: any;
    onNuevoUsuario?: any; 
    onUsuarioSelecionado?: any;
    onEliminar?: any;
}