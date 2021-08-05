import { Perfil } from "./perfil.model";

export class Pessoa{
    id?: number;
    nome?: string;
    email?: string;
    password?: string;
    perfis?: Perfil[]=[];
    isLoad?: boolean;
    mensagem?: string;
}