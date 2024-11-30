var geradorModel = require("../models/geradorModel");


function ingredientesBuscadosController(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo simulador.html
    var ingrediente1 = req.body.ingrediente1Server;
    var ingrediente2 = req.body.ingrediente2Server;
    var ingrediente3 = req.body.ingrediente3Server;
    var ingrediente4 = req.body.ingrediente4Server;
    var ingrediente5 = req.body.ingrediente5Server;



        // Passe os valores como parâmetro e vá para o arquivo geradorModel.js
        geradorModel.ingredientesBuscados(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    ingredientesBuscadosController
}