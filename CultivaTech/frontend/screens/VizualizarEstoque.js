import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function GerenciarEstoque({ navigation }) {
  const [estoque, setEstoque] = useState([
    {
      id: 1,
      name: "Fertilizante NPK",
      quantidade: "500 kg",
      validade: "01/01/2026",
      custo: "R$ 2.000,00",
      dataCompra: "15/01/2025",
    },
    {
      id: 2,
      name: "Sementes de Milho",
      quantidade: "200 sacas",
      validade: "01/01/2027",
      custo: "R$ 5.000,00",
      dataCompra: "10/01/2025",
    },
    {
      id: 3,
      name: "Defensivo Agrícola",
      quantidade: "100 litros",
      validade: "01/12/2025",
      custo: "R$ 1.500,00",
      dataCompra: "05/01/2025",
    },
  ]);

  const handleAction = (action, id) => {
    console.log(`${action} do item com ID ${id}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {estoque.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.itemDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Quantidade: </Text>
                  {item.quantidade}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Validade: </Text>
                  {item.validade}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Custo: </Text>
                  {item.custo}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailText}>
                  <Text style={styles.boldText}>Data da Compra: </Text>
                  {item.dataCompra}
                </Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => handleAction("Editar", item.id)}
                style={styles.actionButton}
              >
                <Text style={styles.actionButtonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleAction("Excluir", item.id)}
                style={[styles.actionButton, styles.deleteButton]}
              >
                <Text style={styles.actionButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.newItemButton}
        onPress={() => navigation.navigate("CadastroEstoque")}
      >
        <Text style={styles.newItemButtonText}>Cadastrar Novo Item</Text>
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
});
