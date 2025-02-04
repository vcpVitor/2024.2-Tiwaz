const API_URL = "http://192.168.0.139:3000/api/plantacoes"; // Substitua pelo IP correto do seu backend

// Buscar todas as plantações
export const listarPlantacao = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) throw new Error("Erro ao buscar plantações");
    
    return await response.json();
  } catch (error) {
    console.error("❌ Erro ao buscar plantações:", error);
    throw error;
  }
};

// Cadastrar uma nova plantação
export const cadastrarPlantacao = async (dados) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Erro desconhecido no cadastro");
    }

    return result; // Retorna { success: true } se foi cadastrado corretamente
  } catch (error) {
    console.error("Erro ao cadastrar plantação:", error);
    return { success: false, error: error.message };
  }
};

// Atualizar uma plantação existente
export const atualizarPlantacao = async (id, dados) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) throw new Error("Erro ao atualizar plantação");

    return await response.json();
  } catch (error) {
    console.error("❌ Erro ao atualizar plantação:", error);
    throw error;
  }
};

// Excluir uma plantação
export const excluirPlantacao = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Erro ao excluir plantação");

    return true;
  } catch (error) {
    console.error("❌ Erro ao excluir plantação:", error);
    throw error;
  }
};

// Buscar todas as plantações
export const listarPlantacoes = async () => {
  try {
    console.log("📌 Buscando plantações do backend...");

    const response = await fetch(`${API_URL}`);
    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Erro ao buscar plantações:", result);
      throw new Error(result.error || "Erro ao buscar plantações");
    }

    console.log("✅ Plantações carregadas:", result.data);
    return result.data; // Retorna apenas a lista de plantações
  } catch (error) {
    console.error("❌ Erro ao listar plantações:", error);
    return []; // Retorna array vazio em caso de erro
  }
};