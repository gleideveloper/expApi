import {Request, Response} from "express";
import { buscaUsuarioPorEmail, createUsuario } from '../usuario/usuario.service';
import {TipoUsuarioConstants} from "../tipo-usuario/tipoUsuario.constants";
import { checkCredentials } from './auth.service';
const signup = async (req: Request, res:Response) =>{
const {nome, email, senha} = req.body
    try{
    const usuario =  await buscaUsuarioPorEmail(email);
    if(usuario) return res.status(400).json({ msg: 'Já existe um usuario com esse email!' });

    const newUsuario = await createUsuario({
        nome,
        email,
        senha,
        tipoUsuarioId: TipoUsuarioConstants.CLIENTE
    })
        res.status(201).json(newUsuario);
    }catch (e) {
        res.status(500).json(e)
    }
}
const login = async (req: Request, res:Response) =>{
    const {email,senha} = req.body;
    try {
        const usuario = await checkCredentials({email, senha});
        if(!usuario) return res.status(401).json({msg: 'Credenciais invalidas'});
        req.session.tipoUsuarioId = usuario.tipoUsuarioId;
        res.status(200).json({msg: "Login efetuado com sucesso"});
    } catch (error) {
        res.status(500).json(error);
    }
}
const logout = (req: Request, res:Response) =>{

}

export default { signup, login, logout }