import Postagem from "./Postagem";

interface User {
    id: number;
    foto: string;
    nome: string;
    senha: string;
    usuario: string;
    postagem?: Postagem[]
    
}
export default User;