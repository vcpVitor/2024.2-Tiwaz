import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";

export default function GerenciarCustos({ navigation }) {
  const [custos, setCustos] = useState([
    {
      id: 1,
      nomeCusto: "Máquinas",
      dataCusto: "15/01/2020",
      tipoCusto: "Maquinário",
      descricao: "Trator agrícola",
      valor: "R$ 120.000,00",
    },
    {
      id: 2,
      nomeCusto: "Funcionários",
      dataCusto: "01/01/2025",
      tipoCusto: "Maquinário",
      descricao: "Salário mensal da equipe",
      valor: "R$ 25.000,00",
    },
    {
      id: 3,
      nomeCusto: "Insumos",
      dataCusto: "10/01/2025",
      tipoCusto: "Maquinário",
      descricao: "Adubos e fertilizantes",
      valor: "R$ 8.000,00",
    },
    {
      id: 4,
      nomeCusto: "Outros",
      dataCusto: "05/01/2025",
      tipoCusto: "Maquinário",
      descricao: "Manutenção de equipamentos",
      valor: "R$ 3.500,00",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDelete = () => {
    setCustos(custos.filter((item) => item.id !== selectedId));
    setModalVisible(false);
  };

  const openModal = (id) => {
    setSelectedId(id);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {custos.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.nomeCusto}</Text>
            <View style={styles.itemDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Data: </Text>
                  {item.dataCusto}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Tipo: </Text>
                  {item.tipoCusto}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Descrição: </Text>
                  {item.descricao}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Valor: </Text>
                  {item.valor}
                </Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CadastroCusto", { custo: item })}
                style={styles.actionButton}
              >
                <Text style={styles.actionButtonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openModal(item.id)}
                style={[styles.actionButton, styles.deleteButton]}
              >
                <Text style={styles.actionButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirmar Exclusão</Text>
            <Text style={styles.modalText}>
              Tem certeza que deseja excluir este custo?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleDelete}
              >
                <Text style={styles.modalButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.newItemButton}
        onPress={() => navigation.navigate("CadastroCusto")}
      >
        <Text style={styles.newItemButtonText}>Cadastrar Novo Custo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flexGrow: 1,
    padding: 15,
  },
  itemContainer: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  itemName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  itemDetails: {
    marginTop: 5,
  },
  detailRow: {
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#000",
  },
  boldText: {
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#439D46",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  actionButtonText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  deleteButton: {
    backgroundColor: "#F42310",
  },
  newItemButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#388E3C",
    paddingVertical: 15,
    borderRadius: 10,
    margin: 20,
  },
  newItemButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#388E3C",
  },
  confirmButton: {
    backgroundColor: "#F42310",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
