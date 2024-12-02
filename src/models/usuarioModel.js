var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT nome, email FROM usuarios WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ingredientesBuscados(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5) {    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO ingredientesBuscados (nome) VALUES ('${ingrediente1}'), ('${ingrediente2}'), ('${ingrediente3}'), ('${ingrediente4}'), ('${ingrediente5}')`;
    return database.executar(instrucaoSql);
}

function receitasBuscadas(receitaBuscada) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO receitasBuscadas (nome) VALUES ('${receitaBuscada}'),`;
    return database.executar(instrucaoSql);
}

function ingredientesMaisFrequentes(req, res) {
    var instrucaoSql = `
    SELECT nome, COUNT(*) AS quantidade
    FROM ingredientesBuscados
    GROUP BY nome
    ORDER BY quantidade DESC
    LIMIT 3;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function receitasMaisBuscadas(req, res) {
    var instrucaoSql = `
    SELECT nome, COUNT(*) AS quantidade
    FROM receitasBuscadas
    GROUP BY nome
    ORDER BY quantidade DESC
    LIMIT 3;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarReceita1ingrediente(ingrediente1) {
    var instrucaoSql = `
    SELECT receitas.nome AS nomeReceita
    FROM receitas 
    JOIN quantidades ON idReceita = fkReceita
    JOIN ingredientes ON idIngrediente = fkIngrediente
    WHERE receitas.idReceita IN (
        SELECT r2.idReceita
        FROM receitas r2
        JOIN quantidades q2 ON r2.idReceita = q2.fkReceita
        JOIN ingredientes i2 ON q2.fkIngrediente = i2.idIngrediente
        WHERE i2.nome = '${ingrediente1}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarReceita2ingredientes(ingrediente1, ingrediente2) {
    var instrucaoSql = `
    SELECT receitas.nome AS nomeReceita
    FROM receitas 
    JOIN quantidades ON idReceita = fkReceita
    JOIN ingredientes ON idIngrediente = fkIngrediente
    WHERE receitas.idReceita IN (
        SELECT r2.idReceita
        FROM receitas r2
        JOIN quantidades q2 ON r2.idReceita = q2.fkReceita
        JOIN ingredientes i2 ON q2.fkIngrediente = i2.idIngrediente
        WHERE i2.nome = '${ingrediente1}'
    )
    AND receitas.idReceita IN (
        SELECT r3.idReceita
        FROM receitas r3
        JOIN quantidades q3 ON r3.idReceita = q3.fkReceita
        JOIN ingredientes i3 ON q3.fkIngrediente = i3.idIngrediente
        WHERE i3.nome = '${ingrediente2}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarReceita3ingredientes(ingrediente1, ingrediente2, ingrediente3) {
    var instrucaoSql = `
    SELECT receitas.nome AS nomeReceita
    FROM receitas 
    JOIN quantidades ON idReceita = fkReceita
    JOIN ingredientes ON idIngrediente = fkIngrediente
    WHERE receitas.idReceita IN (
        SELECT r2.idReceita
        FROM receitas r2
        JOIN quantidades q2 ON r2.idReceita = q2.fkReceita
        JOIN ingredientes i2 ON q2.fkIngrediente = i2.idIngrediente
        WHERE i2.nome = '${ingrediente1}'
    )
    AND receitas.idReceita IN (
        SELECT r3.idReceita
        FROM receitas r3
        JOIN quantidades q3 ON r3.idReceita = q3.fkReceita
        JOIN ingredientes i3 ON q3.fkIngrediente = i3.idIngrediente
        WHERE i3.nome = '${ingrediente2}'
    )
    AND receitas.idReceita IN (
        SELECT r4.idReceita
        FROM receitas r4
        JOIN quantidades q4 ON r4.idReceita = q4.fkReceita
        JOIN ingredientes i4 ON q4.fkIngrediente = i4.idIngrediente
        WHERE i4.nome = '${ingrediente3}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarReceita4ingredientes(ingrediente1, ingrediente2, ingrediente3, ingrediente4) {
    var instrucaoSql = `
    SELECT receitas.nome AS nomeReceita
    FROM receitas 
    JOIN quantidades ON idReceita = fkReceita
    JOIN ingredientes ON idIngrediente = fkIngrediente
    WHERE receitas.idReceita IN (
        SELECT r2.idReceita
        FROM receitas r2
        JOIN quantidades q2 ON r2.idReceita = q2.fkReceita
        JOIN ingredientes i2 ON q2.fkIngrediente = i2.idIngrediente
        WHERE i2.nome = '${ingrediente1}'
    )
    AND receitas.idReceita IN (
        SELECT r3.idReceita
        FROM receitas r3
        JOIN quantidades q3 ON r3.idReceita = q3.fkReceita
        JOIN ingredientes i3 ON q3.fkIngrediente = i3.idIngrediente
        WHERE i3.nome = '${ingrediente2}'
    )
    AND receitas.idReceita IN (
        SELECT r4.idReceita
        FROM receitas r4
        JOIN quantidades q4 ON r4.idReceita = q4.fkReceita
        JOIN ingredientes i4 ON q4.fkIngrediente = i4.idIngrediente
        WHERE i4.nome = '${ingrediente3}'
    )
    AND receitas.idReceita IN (
        SELECT r5.idReceita
        FROM receitas r5
        JOIN quantidades q5 ON r5.idReceita = q5.fkReceita
        JOIN ingredientes i5 ON q5.fkIngrediente = i5.idIngrediente
        WHERE i5.nome = '${ingrediente4}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarReceita5ingredientes(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5) {
    var instrucaoSql = `
    SELECT receitas.nome AS nomeReceita
    FROM receitas 
    JOIN quantidades ON idReceita = fkReceita
    JOIN ingredientes ON idIngrediente = fkIngrediente
    WHERE receitas.idReceita IN (
        SELECT r2.idReceita
        FROM receitas r2
        JOIN quantidades q2 ON r2.idReceita = q2.fkReceita
        JOIN ingredientes i2 ON q2.fkIngrediente = i2.idIngrediente
        WHERE i2.nome = '${ingrediente1}'
    )
    AND receitas.idReceita IN (
        SELECT r3.idReceita
        FROM receitas r3
        JOIN quantidades q3 ON r3.idReceita = q3.fkReceita
        JOIN ingredientes i3 ON q3.fkIngrediente = i3.idIngrediente
        WHERE i3.nome = '${ingrediente2}'
    )
    AND receitas.idReceita IN (
        SELECT r4.idReceita
        FROM receitas r4
        JOIN quantidades q4 ON r4.idReceita = q4.fkReceita
        JOIN ingredientes i4 ON q4.fkIngrediente = i4.idIngrediente
        WHERE i4.nome = '${ingrediente3}'
    )
    AND receitas.idReceita IN (
        SELECT r5.idReceita
        FROM receitas r5
        JOIN quantidades q5 ON r5.idReceita = q5.fkReceita
        JOIN ingredientes i5 ON q5.fkIngrediente = i5.idIngrediente
        WHERE i5.nome = '${ingrediente4}'
    )
    AND receitas.idReceita IN (
        SELECT r6.idReceita
        FROM receitas r6
        JOIN quantidades q6 ON r6.idReceita = q6.fkReceita
        JOIN ingredientes i6 ON q6.fkIngrediente = i6.idIngrediente
        WHERE i6.nome = '${ingrediente5}'
    )`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIngredientesReceitaBuscada(nomeReceita) {
    var instrucaoSql = `
    select distinct ingredientes.nome, quantidades.quantidade
    from quantidades
    join receitas on fkReceita = idReceita
    join ingredientes on fkIngrediente = idIngrediente
    where receitas.nome in ('${nomeReceita}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarInstrucoesReceitaBuscada(nomeReceita) {
    var instrucaoSql = `
    select instrucoes.instrucoes from instrucoes
    join receitas on fkReceita = idReceita
    where receitas.nome in ('${nomeReceita}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    ingredientesBuscados,
    receitasBuscadas,
    ingredientesMaisFrequentes,
    receitasMaisBuscadas,
    buscarReceita1ingrediente,
    buscarReceita2ingredientes,
    buscarReceita3ingredientes,
    buscarReceita4ingredientes,
    buscarReceita5ingredientes,
    buscarIngredientesReceitaBuscada,
    buscarInstrucoesReceitaBuscada
};