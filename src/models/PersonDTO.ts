export interface ListaPerson {
    _id?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    telefono?: string;
    correo?: string;
    matricula?: string;
}
export interface ResponsePerson{
    mensaje?: string;
    data: ListaPerson[] | ListaPerson;
}
