import {Request, Response} from "express";
import {buscaUsuarioPorEmail} from "../usuario/usuario.service";
import {TipoUsuario} from "../../models/TipoUsuario";
import {TipoUsuarioConstants} from "../tipo-usuario/tipoUsuario.constants";
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
        res.status(400).json({ msg: 'Já existe um usuario com esse email!' });
    // const usuario = createUsuario();
    }catch (e) {
        res.status(500).json(e)
    }
}
const login = (req: Request, res:Response) =>{

}
const logout = (req: Request, res:Response) =>{

}

export {signup, login, logout}