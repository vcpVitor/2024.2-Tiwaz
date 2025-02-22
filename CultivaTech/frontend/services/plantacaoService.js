import axios from "axios";

// Base URL do backend
const api = axios.create({
  baseURL: "http://10.0.2.2:3000/api/plantacoes", // Para Android Emulator
  headers: {
    "Content-Type": "application/json",
  },
});

// Cadastrar uma nova plantação
export const cadastrarPlantacao = async (dados) => {
  try {
    const response = await api.post("/", dados);
    return response.data;
  } catch (error) {
    console.error("❌ Erro ao cadastrar plantação:", error?.response?.data || error.message);
    return { success: false, error: error?.response?.data?.error || "Erro ao cadastrar plantação" };
  }
};

// Atualizar uma plantação existente
export const atualizarPlantacao = async (id, dados) => {
  try {
    const response = await api.put(`/${id}`, dados);
    return response.data;
  } catch (error) {
    console.error("❌ Erro ao atualizar plantação:", error?.response?.data || error.message);
    return { success: false, error: error?.response?.data?.error || "Erro ao atualizar plantação" };
  }
};

// Excluir uma plantação
export const excluirPlantacao = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("❌ Erro ao excluir plantação:", error?.response?.data || error.message);
    return { success: false, error: error?.response?.data?.error || "Erro ao excluir plantação" };
  }
};

// Buscar todas as plantações
export const listarPlantacoes = async () => {
  try {
    const response = await api.get("/");

    console.log("✅ Plantações carregadas:", response.data);

    return response.data; // Retorna o objeto completo com "data", "message" e "success"
  } catch (error) {
    console.error("❌ Erro ao listar plantações:", error);
    return { data: [], message: "Erro ao buscar plantações", success: false };
  }
};
