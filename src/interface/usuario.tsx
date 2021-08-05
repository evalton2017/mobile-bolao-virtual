import { createContext, useContext, useState } from "react";
import { AuthContext } from "../pages/login";

interface User{
    uid?: string,
    nome?: string,
    email?: string;
    
    setUser(): void;
}

const IUsuarioContext = createContext<User>({} as User);

const AuthProvider: React.FC = ({children}) => {
    
    const setUser = (uid: string, nome: string, email: string) => {
        const user = {'uid':uid, 'nome': nome, 'email': email};
        localStorage.setItem('user', user.nome);
        return user;
    }

   function setUsuario(uid: string, nome: string, email: string){
        
        return user;
   }

   function getUser(){

   }


    return (
        <AuthContext.Provider value={{setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): User {
    const context = useContext(IUsuarioContext);

    return context;
}

export default {AuthProvider, useAuth};

