import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function GerenciarPlantacoes({ navigation }) {
  const [plantacoes, setPlantacoes] = useState([
    {
      id: 1,
      name: "Milho Safrinha",
      type: "Grão",
      plantingDate: "10/01/2025",
      measure: "2000 hectares",
      cost: "R$ 150.000,00",
    },
    {
      id: 2,
      name: "Tomate Cereja",
      type: "Hortaliça",
      plantingDate: "05/01/2025",
      measure: "5 hectares",
      cost: "R$ 20.000,00",
    },
    {
      id: 3,
      name: "Soja Convencional",
      type: "Grão",
      plantingDate: "08/01/2025",
      measure: "15 hectares",
      cost: "R$ 50.000,00",
    },
  ]);

  const handleAction = (action, id) => {
    console.log(`${action} da plantação com ID ${id}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {plantacoes.map((plantacao) => (
          <View key={plantacao.id} style={styles.plantacaoContainer}>
            <Text style={styles.plantacaoName}>{plantacao.name}</Text>
            <View style={styles.plantacaoDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="leaf" size={20} color="#388E3C" />
                <Text style={styles.detailText}>{plantacao.type}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="expand" size={20} color="#388E3C" />
                <Text style={styles.detailText}>Área Plantada: {plantacao.measure}</Text>
              </View>
              <View style={styles.detailRow}>
                <Ionicons name="calendar" size={20} color="#388E3C" />
                <Text style={styles.detailText}>Data do Plantio: {plantacao.plantingDate}</Text>
              </View>
              <View style={styles.detailRow}>
                <MaterialIcons name="attach-money" size={20} color="#388E3C" />
                <Text style={styles.detailText}>Custo Inicial: {plantacao.cost}</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => handleAction("Colheita", plantacao.id)}
                style={styles.actionButton}
              >
                <FontAwesome5 name="tractor" size={25} color="#388E3C" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleAction("Insumos", plantacao.id)}
                style={styles.actionButton}
              >
                <Ionicons name="nutrition" size={25} color="#388E3C" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleAction("Custos", plantacao.id)}
                style={styles.actionButton}
              >
                <MaterialIcons name="money" size={25} color="#388E3C" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleAction("Editar", plantacao.id)}
                style={styles.actionButton}
              >
                <Ionicons name="pencil" size={25} color="#388E3C" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleAction("Fechamento", plantacao.id)}
                style={styles.actionButtonFechamento}
              >
                <Ionicons name="lock" size={25} color="#FFCA28" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleAction("Excluir", plantacao.id)}
                style={styles.actionButtonExcluir}
              >
                <Ionicons name="trash" size={25} color="#E53935" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flexGrow: 1,
    padding: 15,
  },

  plantacaoContainer: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  plantacaoName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  plantacaoDetails: {
    marginTop: 5,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    color: "#000",
    marginLeft: 10,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    width: 50,
  },
  actionButtonFechamento: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    width: 50,
  },
  actionButtonExcluir: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    width: 50,
  },
  newPlantacaoButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#388E3C",
    paddingVertical: 15,
    borderRadius: 10,
    margin: 20,
  },
  newPlantacaoButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
