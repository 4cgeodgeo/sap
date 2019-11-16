"use strict";

const express = require("express");

const { schemaValidation, asyncHandler } = require("../utils");

const producaoCtrl = require("./distribuicao_ctrl");
const producaoSchema = require("./distribuicao_schema");

const router = express.Router();

router.post(
  "/finaliza",
  schemaValidation(producaoSchema.finaliza),
  asyncHandler(async (req, res, next) => {
    await producaoCtrl.finaliza(
      req.body.usuario_id,
      req.body.atividade_id,
      req.body.sem_correcao
    );

    const msg = "Atividade finalizada com sucesso";

    return res.sendJsonAndLog(true, msg, 201);
  })
);

router.get(
  "/verifica",
  asyncHandler(async (req, res, next) => {
    const dados = await producaoCtrl.verifica(req.body.usuario_id);

    const msg = dados
      ? "Atividade em execução retornada"
      : "Sem atividade em execução";

    return res.sendJsonAndLog(true, msg, 200, dados);
  })
);

router.post(
  "/inicia",
  asyncHandler(async (req, res, next) => {
    const dados = await producaoCtrl.inicia(req.body.usuario_id);

    const msg = dados
      ? "Atividade iniciada"
      : "Sem atividades disponíveis para iniciar";

    return res.sendJsonAndLog(true, msg, 201, dados);
  })
);

router.post(
  "/resposta_questionario",
  schemaValidation(producaoSchema.resposta_questionario),
  asyncHandler(async (req, res, next) => {
    await producaoCtrl.responde_questionario(
      req.body.atividade_id,
      req.body.respostas
    );
    const msg = "Questionário enviado com sucesso";

    return res.sendJsonAndLog(true, msg, 201);
  })
);

router.post(
  "/problema_atividade",
  schemaValidation(producaoSchema.problema_atividade),
  asyncHandler(async (req, res, next) => {
    await producaoCtrl.problema_atividade(
      req.body.atividade_id,
      req.body.tipo_problema_id,
      req.body.descricao
    );
    const msg = "Problema de atividade reportado com sucesso";

    return res.sendJsonAndLog(true, msg, 201);
  })
);

router.get(
  "/tipo_problema",
  asyncHandler(async (req, res, next) => {
    const dados = await producaoCtrl.get_tipo_problema();

    const msg = "Tipos de problema retornado";

    return res.sendJsonAndLog(true, msg, 200, dados);
  })
);

module.exports = router;
