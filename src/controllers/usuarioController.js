var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function ingredientesBuscadosController(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo simulador.html
    var ingrediente1 = req.body.ingrediente1Server;
    var ingrediente2 = req.body.ingrediente2Server;
    var ingrediente3 = req.body.ingrediente3Server;
    var ingrediente4 = req.body.ingrediente4Server;
    var ingrediente5 = req.body.ingrediente5Server;

    console.log("Acessei o controller");


        // Passe os valores como parâmetro e vá para o arquivo geradorModel.js
        usuarioModel.ingredientesBuscados(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5)
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

function receitasBuscadasController(req, res){
    var nomeReceita = req.body.nomeReceitaServer
    usuarioModel.receitasBuscadas(nomeReceita)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    }

function ingredientesMaisFrequentesController(req, res) {
    usuarioModel.ingredientesMaisFrequentes()
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    }

function receitasMaisBuscadasController(req, res) {
    usuarioModel.receitasMaisBuscadas()
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    }

    function quantidadeReceitasController(req, res) {
        usuarioModel.quantidadeReceitas()
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro na coleta de novos Dados:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

    function buscarReceita1ingredienteController(req, res) {
        var ingrediente1 = req.body.ingrediente1Server;

        usuarioModel.buscarReceita1ingrediente(ingrediente1)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro na coleta de novos Dados:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
    function buscarReceita2ingredientesController(req, res) {
        var ingrediente1 = req.body.ingrediente1Server;
        var ingrediente2 = req.body.ingrediente2Server;


        usuarioModel.buscarReceita2ingredientes(ingrediente1, ingrediente2)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro na coleta de novos Dados:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
    function buscarReceita3ingredientesController(req, res) {
        var ingrediente1 = req.body.ingrediente1Server;
        var ingrediente2 = req.body.ingrediente2Server;
        var ingrediente3 = req.body.ingrediente3Server;

        usuarioModel.buscarReceita3ingredientes(ingrediente1, ingrediente2, ingrediente3)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro na coleta de novos Dados:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
    function buscarReceita4ingredientesController(req, res) {
        var ingrediente1 = req.body.ingrediente1Server;
        var ingrediente2 = req.body.ingrediente2Server;
        var ingrediente3 = req.body.ingrediente3Server;
        var ingrediente4 = req.body.ingrediente4Server;

        usuarioModel.buscarReceita4ingredientes(ingrediente1, ingrediente2, ingrediente3, ingrediente4)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro na coleta de novos Dados:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

    function buscarReceita5ingredientesController(req, res) {
        var ingrediente1 = req.body.ingrediente1Server;
        var ingrediente2 = req.body.ingrediente2Server;
        var ingrediente3 = req.body.ingrediente3Server;
        var ingrediente4 = req.body.ingrediente4Server;
        var ingrediente5 = req.body.ingrediente5Server;

        usuarioModel.buscarReceita5ingredientes(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro na coleta de novos Dados:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

    function buscarIngredientesReceitaBuscadaController(req, res){
        var nomeReceita = req.body.nomeReceitaServer
        usuarioModel.buscarIngredientesReceitaBuscada(nomeReceita)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro na coleta de novos Dados:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }


    function buscarInstrucoesReceitaBuscadaController(req, res) {
        var nomeReceita = req.body.nomeReceitaServer
        usuarioModel.buscarInstrucoesReceitaBuscada(nomeReceita)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro na coleta de novos Dados:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
    
module.exports = {
    autenticar,
    cadastrar,
    ingredientesBuscadosController,
    receitasBuscadasController,
    ingredientesMaisFrequentesController,
    receitasMaisBuscadasController,
    quantidadeReceitasController,
    buscarReceita1ingredienteController,
    buscarReceita2ingredientesController,
    buscarReceita3ingredientesController,
    buscarReceita4ingredientesController,
    buscarReceita5ingredientesController,
    buscarIngredientesReceitaBuscadaController,
    buscarInstrucoesReceitaBuscadaController,

}