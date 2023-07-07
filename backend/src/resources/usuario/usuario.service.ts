import {Usuario} from "../../models/Usuario";

export const createUsuario = async (usuario: CreateUsuarioDto):Promise<UsuarioDto> => {
    const  rounds = parseInt(process.env.SALT_ROUNDS)
}
export const buscaUsuarioPorEmail = async(email: string): Promise<UsuarioDto|null> {
    return await Usuario.findOne()
}