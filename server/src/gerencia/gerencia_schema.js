'use strict'

const Joi = require('joi')

const models = {}

models.idParams = Joi.object().keys({
  id: Joi.number().integer().required()
})

models.proximaQuery = Joi.object().keys({
  proxima: Joi.string().valid('true', 'false')
})

models.emAndamentoQuery = Joi.object().keys({
  em_andamento: Joi.string().valid('true', 'false')
})

models.unidadeTrabalhoDisponivel = Joi.object().keys({
  unidade_trabalho_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1),
  disponivel: Joi.boolean().required()
})

models.atividadePausar = Joi.object().keys({
  unidade_trabalho_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1)
})

models.atividadeReiniciar = Joi.object().keys({
  unidade_trabalho_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1)
})

models.filaPrioritaria = Joi.object().keys({
  atividade_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1),
  usuario_prioridade_id: Joi.number().integer().strict().required(),
  prioridade: Joi.number().integer().strict().required()
})

models.filaPrioritariaGrupo = Joi.object().keys({
  atividade_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1),
  perfil_producao_id: Joi.number().integer().strict().required(),
  prioridade: Joi.number().integer().strict().required()
})

models.observacao = Joi.object().keys({
  atividade_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1),
  observacao_atividade: Joi.string().allow('', null).required(),
  observacao_unidade_trabalho: Joi.string().allow('', null).required()
})

models.atividadeVoltar = Joi.object().keys({
  atividade_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1),
  manter_usuarios: Joi.boolean().strict().required()
})

models.atividadeAvancar = Joi.object().keys({
  atividade_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1),
  concluida: Joi.boolean().strict().required()
})

models.bancoDados = Joi.object().keys({
  servidor: Joi.string().required(),
  porta: Joi.number().integer().strict().required(),
  banco: Joi.string().required()
})

models.perfilProducaoIds = Joi.object().keys({
  perfil_producao_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1)
})

models.perfilProducao = Joi.object().keys({
  perfil_producao: Joi.array()
    .items(
      Joi.object().keys({
        nome: Joi.string().required()
      })
    )
    .required()
    .min(1)
})

models.perfilProducaoAtualizacao = Joi.object().keys({
  perfil_producao: Joi.array()
    .items(
      Joi.object().keys({
        id: Joi.number().integer().strict().required(),
        nome: Joi.string().required()
      })
    )
    .unique('id')
    .required()
    .min(1)
})

models.perfilProjetoOperadorIds = Joi.object().keys({
  perfil_projeto_operador_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1)
})

models.perfilProjetoOperador = Joi.object().keys({
  perfil_projeto_operador: Joi.array()
    .items(
      Joi.object().keys({
        usuario_id: Joi.number().integer().strict().required(),
        projeto_id: Joi.number().integer().strict().required(),
        prioridade: Joi.number().integer().strict().required()
      })
    )
    .required()
    .min(1)
})

models.perfilProjetoOperadorAtualizacao = Joi.object().keys({
  perfil_projeto_operador: Joi.array()
    .items(
      Joi.object().keys({
        id: Joi.number().integer().strict().required(),
        usuario_id: Joi.number().integer().strict().required(),
        projeto_id: Joi.number().integer().strict().required(),
        prioridade: Joi.number().integer().strict().required()
      })
    )
    .unique('id')
    .required()
    .min(1)
})

models.perfilProducaoOperadorIds = Joi.object().keys({
  perfil_producao_operador_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1)
})

models.perfilProducaoOperador = Joi.object().keys({
  perfil_producao_operador: Joi.array()
    .items(
      Joi.object().keys({
        usuario_id: Joi.number().integer().strict().required(),
        perfil_producao_id: Joi.number().integer().strict().required()
      })
    )
    .required()
    .min(1)
})

models.perfilProducaoOperadorAtualizacao = Joi.object().keys({
  perfil_producao_operador: Joi.array()
    .items(
      Joi.object().keys({
        id: Joi.number().integer().strict().required(),
        usuario_id: Joi.number().integer().strict().required(),
        perfil_producao_id: Joi.number().integer().strict().required()
      })
    )
    .unique('id')
    .required()
    .min(1)
})

models.perfilProducaoEtapaIds = Joi.object().keys({
  perfil_producao_etapa_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1)
})

models.perfilProducaoEtapa = Joi.object().keys({
  perfil_producao_etapa: Joi.array()
    .items(
      Joi.object().keys({
        perfil_producao_id: Joi.number().integer().strict().required(),
        subfase_id: Joi.number().integer().strict().required(),
        tipo_etapa_id: Joi.number().integer().strict().required(),
        prioridade: Joi.number().integer().strict().required()
      })
    )
    .required()
    .min(1)
})

models.perfilProducaoEtapaAtualizacao = Joi.object().keys({
  perfil_producao_etapa: Joi.array()
    .items(
      Joi.object().keys({
        id: Joi.number().integer().strict().required(),
        perfil_producao_id: Joi.number().integer().strict().required(),
        subfase_id: Joi.number().integer().strict().required(),
        tipo_etapa_id: Joi.number().integer().strict().required(),
        prioridade: Joi.number().integer().strict().required()
      })
    )
    .unique('id')
    .required()
    .min(1)
})

models.perfilDificuldadeOperadorIds = Joi.object().keys({
  perfil_dificuldade_operador_ids: Joi.array()
    .items(Joi.number().integer().strict())
    .unique()
    .required()
    .min(1)
})

models.perfilDificuldadeOperador = Joi.object().keys({
  perfil_dificuldade_operador: Joi.array()
    .items(
      Joi.object().keys({
        usuario_id: Joi.number().integer().strict().required(),
        subfase_id: Joi.number().integer().strict().required(),
        projeto_id: Joi.number().integer().strict().required(),
        tipo_perfil_dificuldade_id: Joi.number().integer().strict().required()
      })
    )
    .required()
    .min(1)
})

models.perfilDificuldadeOperadorAtualizacao = Joi.object().keys({
  perfil_dificuldade_operador: Joi.array()
    .items(
      Joi.object().keys({
        id: Joi.number().integer().strict().required(),
        usuario_id: Joi.number().integer().strict().required(),
        subfase_id: Joi.number().integer().strict().required(),
        projeto_id: Joi.number().integer().strict().required(),
        tipo_perfil_dificuldade_id: Joi.number().integer().strict().required()
      })
    )
    .unique('id')
    .required()
    .min(1)
})

module.exports = models
