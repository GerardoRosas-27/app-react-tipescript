import axios from 'axios';
import { ListaPerson, ResponsePerson } from '../models/PersonDTO';

export default class PersonService {

    async getPersons() {
        return await axios.get<ResponsePerson>('http://localhost:3000/api/users');
    }
    async getPerson(id: number) {
        return await axios.get<ResponsePerson>('http://localhost:3000/api/users/' + id);
    }

    async postPerson(person: ListaPerson) {
        return await axios.post<ResponsePerson>('http://localhost:3000/api/users', person);
    }

    async putPerson(id: string, data: ListaPerson) {
        return await axios.put<ResponsePerson>('http://localhost:3000/api/users/' + id, data);
    }

    async deletePerson(item: ListaPerson) {
        return await axios.delete<ResponsePerson>('http://localhost:3000/api/users/' + item._id);
    }

}