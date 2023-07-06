import { BaseRepository } from "./BaseRepository";
import {Produto} from "../models/Produto";

/**
 * 
 * Interface que define as operações básicas
 * de manipulação de registros de Produtos na
 * base de dados da aplicação.
 * 
 * Esta interface extende a interface {@link BaseRepository}.
 *
 * @author Gleides Vinente <gleivelop@gmail.com>
 */
interface ProdutosRepository extends BaseRepository<Produto, string> {

    /**
     * 
     * Método que busca por um registro de um
     * Produto na base de dados da aplicação a 
     * partir do nome do Produto.
     * 
     * @param nome do Produto pesquisado.
     * @returns Dados do Produto encontrado.
     */
    buscarPorNome(nome: string): Promise<Produto>;

}

export { ProdutosRepository };
