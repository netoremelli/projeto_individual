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

router.post("/buscarReceita", function (req, res) {
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


module.exports = router;