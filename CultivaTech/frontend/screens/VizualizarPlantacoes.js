import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { listarPlantacoes, excluirPlantacao } from "../services/plantacaoService";

export default function GerenciarPlantacoes({ navigation }) {
  const [plantacoes, setPlantacoes] = useState([]); // Estado inicial como array vazio
  const [loading, setLoading] = useState(false); // Estado para indicar carregamento

  // Função para buscar plantações do backend
  const fetchPlantacoes = async () => {
    setLoading(true);
    try {
      const response = await listarPlantacoes();
      console.log("📌 Dados recebidos do backend:", response);

      if (response && response.success && Array.isArray(response.data)) {
        setPlantacoes(response.data);
      } else {
        setPlantacoes([]);
        console.error("⚠️ Resposta inesperada do backend:", response);
      }
    } catch (error) {
      console.error("❌ Erro ao listar plantações:", error);
      Alert.alert("Erro", "Não foi possível carregar as plantações.");
      setPlantacoes([]); // Evita undefined
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlantacoes();
  }, []);

  const handleExcluir = async (id) => {
    Alert.alert(
      "Confirmação",
      "Deseja realmente excluir esta plantação?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await excluirPlantacao(id);
              Alert.alert("Sucesso", "Plantação excluída com sucesso!");
              fetchPlantacoes(); // Atualiza a lista após exclusão
            } catch (error) {
              console.error("❌ Erro ao excluir plantação:", error);
              Alert.alert("Erro", "Não foi possível excluir a plantação.");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const navigateToVisualizacao = (plantacao) => {
    navigation.navigate("VizualizarPlantacaoIndividual", {
      plantacaoId: plantacao.id,
      plantacaoData: plantacao,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#388E3C" />
        ) : plantacoes.length === 0 ? (
          <Text style={styles.emptyMessage}>Nenhuma plantação cadastrada.</Text>
        ) : (
          plantacoes.map((plantacao) => (
            <View key={plantacao.id} style={styles.plantacaoContainer}>
              <View style={styles.plantacaoHeader}>
                <Text style={styles.plantacaoName}>{plantacao.nome}</Text>
                <TouchableOpacity
                  onPress={() => navigateToVisualizacao(plantacao)}
                  style={styles.visualizarButton}
                >
                  <Ionicons name="eye" size={20} color="#388E3C" />
                  <Text style={styles.visualizarText}>Visualizar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.plantacaoDetails}>
                <View style={styles.detailRow}>
                  <Ionicons name="leaf" size={20} color="#388E3C" />
                  <Text style={styles.detailText}>Tipo: {plantacao.tipo}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Ionicons name="expand" size={20} color="#388E3C" />
                  <Text style={styles.detailText}>
                    Área Plantada: {plantacao.areaPlantada} hectares
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Ionicons name="calendar" size={20} color="#388E3C" />
                  <Text style={styles.detailText}>
                    Data do Plantio: {plantacao.dataPlantio}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Ionicons name="cash" size={20} color="#388E3C" />
                  <Text style={styles.detailText}>
                    Custo Inicial: R$ {plantacao.custoInicial?.toLocaleString("pt-BR")}
                  </Text>
                </View>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  onPress={() => handleExcluir(plantacao.id)}
                  style={styles.actionButtonExcluir}
                >
                  <Ionicons name="trash" size={25} color="#E53935" />
                  <Text style={styles.actionText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.newPlantacaoButton}
        onPress={() => navigation.navigate("CadastroPlantacao")}
      >
        <Ionicons name="add" size={28} color="#fff" />
        <Text style={styles.newPlantacaoButtonText}>Cadastrar Plantação</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f5f5f5" },
  container: { flexGrow: 1, padding: 15 },
  emptyMessage: { fontSize: 18, textAlign: "center", marginTop: 20, color: "#666" },
  plantacaoContainer: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  plantacaoHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  plantacaoName: { fontSize: 22, fontWeight: "bold", color: "#000" },
  visualizarButton: { flexDirection: "row", alignItems: "center" },
  visualizarText: { fontSize: 16, color: "#388E3C", marginLeft: 5 },
  actionButtons: { flexDirection: "row", justifyContent: "space-around", marginTop: 15 },
  actionButtonExcluir: {
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    paddingVertical: 10,
    borderRadius: 10,
    width: 90,
  },
  actionText: { fontSize: 14, color: "#000", marginTop: 5 },
  newPlantacaoButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#388E3C",
    paddingVertical: 15,
    borderRadius: 10,
    margin: 20,
  },
  newPlantacaoButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold", marginLeft: 10 },
});
