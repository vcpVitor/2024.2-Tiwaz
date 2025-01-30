const plantacaoService = require("../services/plantacaoService");

// Cadastrar Plantação
const cadastrarPlantacao = async (req, res) => {
  try {
    const { nome, tipo, areaPlantada, quantidadePlantada, dataPlantio, custoInicial } = req.body;

    // Verificação de campos obrigatórios
    if (!nome || !tipo || (!areaPlantada && !quantidadePlantada) || !dataPlantio || !custoInicial) {
      return res.status(400).json({
        success: false,
        error: "Todos os campos obrigatórios devem ser preenchidos!",
      });
    }

    // Cadastra nova plantação
    const novaPlantacao = await plantacaoService.cadastrarPlantacao({
      nome,
      tipo,
      areaPlantada: areaPlantada || null,
      quantidadePlantada: quantidadePlantada || null,
      dataPlantio,
      custoInicial,
    });

    console.log("Plantação cadastrada com sucesso:", novaPlantacao);

    return res.status(201).json({
      success: true,
      message: "Plantação cadastrada com sucesso!",
      data: novaPlantacao, // Retorno organizado dentro de `data`
    });
  } catch (error) {
    console.error("❌ Erro ao cadastrar plantação:", error.stack);
    return res.status(500).json({ success: false, error: "Erro ao cadastrar plantação!" });
  }
};

// Listar Plantações
const listarPlantacoes = async (req, res) => {
  try {
    const plantacoes = await plantacaoService.listarPlantacoes();

    console.log(` ${plantacoes.length} plantação(ões) listada(s)`);

    return res.status(200).json({
      success: true,
      message: plantacoes.length > 0 ? "Plantações encontradas!" : "Nenhuma plantação encontrada.",
      data: plantacoes,
    });
  } catch (error) {
    console.error(" Erro ao listar plantações:", error.stack);
    return res.status(500).json({ success: false, error: "Erro ao listar plantações!" });
  }
};

// Atualizar Plantação
const atualizarPlantacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, tipo, areaPlantada, quantidadePlantada, dataPlantio, custoInicial } = req.body;

    // Atualiza a plantação
    const plantacaoAtualizada = await plantacaoService.atualizarPlantacao(id, {
      nome,
      tipo,
      areaPlantada: areaPlantada || null,
      quantidadePlantada: quantidadePlantada || null,
      dataPlantio,
      custoInicial,
    });

    if (!plantacaoAtualizada) {
      return res.status(404).json({ success: false, error: "Plantação não encontrada!" });
    }

    console.log(`Plantação ${id} atualizada com sucesso!`);

    return res.status(200).json({
      success: true,
      message: "Plantação atualizada com sucesso!",
      data: plantacaoAtualizada,
    });
  } catch (error) {
    console.error("Erro ao atualizar plantação:", error.stack);
    return res.status(500).json({ success: false, error: "Erro ao atualizar plantação!" });
  }
};

// Excluir Plantação
const excluirPlantacao = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Exclui a plantação
    const plantacaoExcluida = await plantacaoService.excluirPlantacao(id);

    if (!plantacaoExcluida) {
      return res.status(404).json({ success: false, error: "Plantação não encontrada!" });
    }

    console.log(`Plantação ${id} excluída com sucesso!`);

    return res.status(200).json({
      success: true,
      message: "Plantação excluída com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao excluir plantação:", error.stack);
    return res.status(500).json({ success: false, error: "Erro ao excluir plantação!" });
  }
};

module.exports = {
  cadastrarPlantacao,
  listarPlantacoes,
  atualizarPlantacao,
  excluirPlantacao,
};
