const Custos = require('../models/custosModels');

// Cadastrar custo
const cadastrarCusto = async (dados) => {
  return await Custos.create(dados);
};

// Listar Custos
const listarCustos = async () => {
  return await Custos.findAll();
};

// Atualizar Custos
const atualizarCustos = async (id, dados) => {
  const custo = await Custos.findByPk(id);

  if (!custo) return null;

  await custo.update(dados);
  return custo;
};

// Excluir Custo
const excluirCusto = async (id) => {
  const custo = await Custos.findByPk(id);

  if (!custo) return null;

  await custo.destroy();
  return true;
};

module.exports = {
    cadastrarCusto,
    listarCustos,
    atualizarCustos,
    excluirCusto,
};
