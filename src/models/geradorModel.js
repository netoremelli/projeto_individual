var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function ingredientesBuscados(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5) {    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO buscados (nome) VALUES ('${ingrediente1}'), ('${ingrediente2}'), ('${ingrediente3}'), ('${ingrediente4}'), ('${ingrediente5}')`;
    return database.executar(instrucaoSql);
}

module.exports = {
    ingredientesBuscados
};