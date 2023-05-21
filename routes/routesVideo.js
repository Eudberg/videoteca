const express = require("express");
const ControllerVideo = require("../controllers/ControllerVideo");
const router = express.Router();

router.get("/Cadastrar", ControllerVideo.cadastrarVideo);
router.post("/Cadastrar", ControllerVideo.VideoCreate);

router.get("/", ControllerVideo.listarVideo);

router.get("/update/:id_video", ControllerVideo.UpdateVideo);
router.post("/update", ControllerVideo.VideoUpdate);

router.post("/excluir", ControllerVideo.excluir);

module.exports = router;
