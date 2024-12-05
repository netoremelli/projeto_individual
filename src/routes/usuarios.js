var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/buscarReceita1ingrediente", function (req, res) {
    usuarioController.buscarReceita1ingredienteController(req, res);
});

router.post("/buscarReceita2ingredientes", function (req, res) {
    usuarioController.buscarReceita2ingredientesController(req, res);
});

router.post("/buscarReceita3ingredientes", function (req, res) {
    usuarioController.buscarReceita3ingredientesController(req, res);
});

router.post("/buscarReceita4ingredientes", function (req, res) {
    usuarioController.buscarReceita4ingredientesController(req, res);
});


router.post("/buscarReceita5ingredientes", function (req, res) {
    usuarioController.buscarReceitaController(req, res);
});

router.post("/buscarIngredientesReceitaBuscada", function (req, res) {
    usuarioController.buscarIngredientesReceitaBuscadaController(req, res);
});

router.post("/buscarInstrucoesReceitaBuscada", function (req, res) {
    usuarioController.buscarInstrucoesReceitaBuscadaController(req, res);
});


router.post("/ingredientesBuscados", function (req, res) {
    usuarioController.ingredientesBuscadosController(req, res);
});

router.post("/receitasBuscadas", function (req, res) {
    usuarioController.receitasBuscadasController(req, res);
});

router.post("/receitasMaisBuscadas", function (req, res) {
    usuarioController.receitasMaisBuscadasController(req, res);
});

router.post("/ingredientesMaisFrequentes", function (req, res) {
    usuarioController.ingredientesMaisFrequentesController(req, res);
});

router.post("/quantidadeReceitas", function (req, res) {
    usuarioController.quantidadeReceitasController(req, res);
});


module.exports = router;