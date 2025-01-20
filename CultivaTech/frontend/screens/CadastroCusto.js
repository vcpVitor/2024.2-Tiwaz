import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image,KeyboardAvoidingView,Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

export default function CadastrarCustos({ route, navigation }) {
  const [nomeCusto, setNomeCusto] = useState("");
  const [dataCusto, setDataCusto] = useState("");
  const [tipoCusto, setTipoCusto] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Maquinário", value: "Maquinario" },
    { label: "Funcionários", value: "Funcionarios" },
    { label: "Outro", value: "Outro" },
  ]);

  const { custo } = route.params || {}; // Se houver um custo, preenche os campos

  useEffect(() => {
    if (custo) {
      setNomeCusto(custo.nomeCusto);
      setDataCusto(custo.dataCusto);
      setTipoCusto(custo.tipoCusto);
      setDescricao(custo.descricao);
      setValor(custo.valor);
    }
  }, [custo]);


  const isFormValid = () => {
    return nomeCusto && dataCusto && tipoCusto && descricao && valor;
  };

  const handleSave = () => {
    if (isFormValid()) {
      Alert.alert(
        "Sucesso",
        custo 
        ? "Custo editado  com sucesso!"
        : "Novo custo cadastrado!");
      navigation.goBack();
    } else {
      Alert.alert("Erro", "Preencha todos os campos antes de salvar!");
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        source={require("../assets/images/plantacao2.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.inputGroup}>
        <Ionicons name="cash-outline" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome do Custo"
          placeholderTextColor="#000"
          value={nomeCusto}
          onChangeText={setNomeCusto}
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons name="calendar-outline" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Data do Custo (DD/MM/AAAA)"
          placeholderTextColor="#000"
          value={dataCusto}
          onChangeText={setDataCusto}
        />
      </View>

      <Text style={styles.subHeader}>Tipo do Custo:</Text>
      <DropDownPicker
        open={open}
        value={tipoCusto}
        items={items}
        setOpen={setOpen}
        setValue={setTipoCusto}
        setItems={setItems}
        placeholder="Selecione o tipo do custo"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={{
          fontSize: 16, // Aumenta o tamanho do texto
          color: "#000", // Define a cor do texto
        }}
      />

      <View style={styles.inputGroup}>
        <Ionicons name="document-text-outline" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#000"
          value={descricao}
          onChangeText={setDescricao}
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons name="pricetag-outline" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Valor do Custo"
          placeholderTextColor="#000"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
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
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  dropdown: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderWidth: 0,
    marginBottom: 15,
    paddingVertical: 20,
  },
  dropdownContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderWidth: 0,
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
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
