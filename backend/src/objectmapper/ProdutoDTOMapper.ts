import {Produto} from "../models/Produto";
import {ProdutoDTO} from "../dto/Produto/ProdutoDTO";
import {ObjectMapper} from "../common/ObjectMapper";

/**
 *
 * Implementação da interface de mapeamento de objetos
 * de origem {@link Produto} para objetos de
 * destino {@link ProdutoDTO}.
 *
 * @author Gleides Vinente <gleivelop@gmail.com>
 */
class ProdutoDTOMapper extends ObjectMapper<Produto, ProdutoDTO> {

    public constructor(){
        super();
    }

    /**
     *
     * Implementação do método que mapeia um objeto de
     * origem {@link Produto} para um objeto
     * de destino {@link ProdutoDTO}.
     */
    public async mapearOrigemParaDestino(modelo: Produto): Promise<ProdutoDTO> {
        return {
            nome: modelo.nome,
            preco: modelo.preco,
            estoque: modelo.estoque,
        };
    }
}

export { ProdutoDTOMapper };
