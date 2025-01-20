const plantacaoService = require('../services/plantacaoService');

// Cadastrar Plantação
const cadastrarPlantacao = async (req, res) => {
  try {
    const { nome, tipo, area, dataPlantio } = req.body;

    if (!nome || !tipo || !area || !dataPlantio) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    const novaPlantacao = await plantacaoService.cadastrarPlantacao({ nome, tipo, area, dataPlantio });
    res.status(201).json({ message: 'Plantação cadastrada com sucesso!', plantacao: novaPlantacao });
  } catch (error) {
    console.error('Erro ao cadastrar plantação:', error.message);
    res.status(500).json({ error: 'Erro ao cadastrar plantação!' });
  }
};

// Listar Plantações
const listarPlantacoes = async (req, res) => {
  try {
    const plantacoes = await plantacaoService.listarPlantacoes();
    res.status(200).json(plantacoes);
  } catch (error) {
    console.error('Erro ao listar plantações:', error.message);
    res.status(500).json({ error: 'Erro ao listar plantações!' });
  }
};

// Atualizar Plantação
const atualizarPlantacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, tipo, area, dataPlantio } = req.body;

    const plantacaoAtualizada = await plantacaoService.atualizarPlantacao(id, { nome, tipo, area, dataPlantio });

    if (!plantacaoAtualizada) {
      return res.status(404).json({ error: 'Plantação não encontrada!' });
    }

    res.status(200).json({ message: 'Plantação atualizada com sucesso!', plantacao: plantacaoAtualizada });
  } catch (error) {
    console.error('Erro ao atualizar plantação:', error.message);
    res.status(500).json({ error: 'Erro ao atualizar plantação!' });
  }
};

// Excluir Plantação
const excluirPlantacao = async (req, res) => {
  try {
    const { id } = req.params;

    const plantacaoExcluida = await plantacaoService.excluirPlantacao(id);

    if (!plantacaoExcluida) {
      return res.status(404).json({ error: 'Plantação não encontrada!' });
    }

    res.status(200).json({ message: 'Plantação excluída com sucesso!' });
  } catch (error) {
    console.error('Erro ao excluir plantação:', error.message);
    res.status(500).json({ error: 'Erro ao excluir plantação!' });
  }
};

module.exports = {
  cadastrarPlantacao,
  listarPlantacoes,
  atualizarPlantacao,
  excluirPlantacao,
};
