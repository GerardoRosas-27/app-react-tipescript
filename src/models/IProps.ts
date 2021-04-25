import { ListaPerson } from "./PersonDTO";

export interface IPersonProps {
   data: ListaPerson[];
   usuario?: ListaPerson;
   guardarUsuario?: any;
   actualizarUsuario?: any;
}