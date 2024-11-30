var express = require("express");
var router = express.Router();

var geradorController = require("../controllers/geradorController");

//Recebendo os dados do html e direcionando para a função cadastrar de geradorController.js
router.post("/ingredientesBuscados", function (req, res) {
    geradorController.ingredientesBuscadosController(req, res);
});


module.exports = router;