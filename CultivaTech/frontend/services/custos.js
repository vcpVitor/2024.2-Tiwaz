import axios from "axios";

// Base URL do backend
const api = axios.create({
  baseURL: "http://10.0.2.2:3000/api/custos", // Altere para o IP correto caso use dispositivo físico
});

// Listar todos os custos
export const getCustos = async () => {
  const response = await api.get("/");
  return response.data;
};

// Cadastrar novo custo
export const cadastrarCusto = async (dados) => {
  const response = await api.post("/", dados);
  return response.data;
};

// Atualizar custo existente
export const atualizarCusto = async (id, dados) => {
  const response = await api.put(`/${id}`, dados);
  return response.data;
};

// Excluir custo
export const deleteCusto = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
