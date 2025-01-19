import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from 'react-native-checkbox';

export default function CadastroEstoque({ navigation }) {
  // State para os campos do formulário
  const [produto, setProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [unidadeGrama, setUnidadeGrama] = useState(false);
  const [unidadeQuilo, setUnidadeQuilo] = useState(false);
  const [unidadeMl, setUnidadeMl] = useState(false);
  const [unidadeL, setUnidadeL] = useState(false);
  const [custo, setCusto] = useState("");
  const [dataCompra, setDataCompra] = useState("");
  const [quantidade, setQuantidade] = useState("");

  // Função para verificar se todos os campos estão preenchidos
  const isFormValid = () => {
    return produto && descricao && (unidadeGrama || unidadeQuilo || unidadeMl || unidadeL) && custo && dataCompra && quantidade;
  };

  const handleSave = () => {
    if (isFormValid()) {
      Alert.alert("Sucesso", "Estoque cadastrado com sucesso!");
      navigation.goBack();
    } else {
      Alert.alert("Erro", "Preencha todos os campos antes de salvar!");
      console.log(produto,descricao,unidadeGrama,unidadeQuilo,unidadeMl,unidadeL,custo,dataCompra,quantidade);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Imagem */}
      <Image
        source={require("../assets/images/estoque.jpg")} // Substitua pelo caminho correto
        style={styles.image}
        resizeMode="cover"
      />

      {/* Campo Nome do Produto */}
      <View style={styles.inputGroup}>
        <Ionicons name="cube" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          placeholderTextColor="#aaa"
          value={produto}
          onChangeText={setProduto}
        />
      </View>

      {/* Campo Validade */}
      <View style={styles.inputGroup}>
        <Ionicons name="document-text" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Validade"
          placeholderTextColor="#aaa"
          value={descricao}
          onChangeText={setDescricao}
        />
      </View>

      {/* Seção de Unidade de Medida */}
      <Text style={styles.subHeader}>Selecione a Unidade de Medida:</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxGroup}>
          <CheckBox
            value={unidadeGrama}
            onValueChange={setUnidadeGrama}
            tintColors={{ true: "#000", false: "#000" }}
            label = "g"
          />
        </View>
        <View style={styles.checkboxGroup}>
          <CheckBox
            value={unidadeQuilo}
            onValueChange={setUnidadeQuilo}
            tintColors={{ true: "#4CAF50", false: "#aaa" }}
            label = "Kg"
          />
        </View>
        <View style={styles.checkboxGroup}>
          <CheckBox
            value={unidadeMl}
            onValueChange={setUnidadeMl}
            tintColors={{ true: "#4CAF50", false: "#aaa" }}
            label = "Ml"
          />
        </View>
        <View style={styles.checkboxGroup}>
          <CheckBox
            value={unidadeL}
            onValueChange={setUnidadeL}
            tintColors={{ true: "#4CAF50", false: "#aaa" }}
            label = "L"
          />
        </View>
      </View>

      {/* Campo Quantidade */}
      <View style={styles.inputGroup}>
        <Ionicons name="stats-chart" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          placeholderTextColor="#aaa"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
      </View>

      {/* Campo Custo */}
      <View style={styles.inputGroup}>
        <Ionicons name="cash" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Custo do Produto"
          placeholderTextColor="#aaa"
          value={custo}
          onChangeText={setCusto}
          keyboardType="numeric"
        />
      </View>

      {/* Campo Data da Compra */}
      <View style={styles.inputGroup}>
        <Ionicons name="calendar" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Data da Compra (DD/MM/AAAA)"
          placeholderTextColor="#aaa"
          value={dataCompra}
          onChangeText={setDataCompra}
        />
      </View>

      {/* Botões de Ação */}
      <View style={styles.buttonContainer}>
        {/* Botão Salvar */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>

        {/* Botão Cancelar */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subHeader: {
    fontSize: 18,
    color: "#4CAF50",
    marginBottom: 10,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#FF5252",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkboxContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
