import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { cadastrarCusto, atualizarCusto } from "../services/custos";

export default function CadastrarCustos({ route, navigation }) {
  const custoExistente = route.params?.custo;

  const formatDateForBackend = (date) => {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = date.match(regex);
    if (match) {
      const [, day, month, year] = match;
      return `${year}-${month}-${day}`;
    }
    return null; // Retorna null se a data for inválida
  };


  const [nome, setNome] = useState(custoExistente?.nome || "");
  const [data, setData] = useState(custoExistente? formatDateForBackend(custoExistente.data) : "");
  const [descricao, setDescricao] = useState(custoExistente?.descricao || "");
  const [valorCusto, setValorCusto] = useState(
    custoExistente?.valorCusto?.toString() || ""
  );

  const [open, setOpen] = useState(false);
  const [tipoCusto, setTipoCusto] = useState(custoExistente?.tipoCusto || null);
  const [items, setItems] = useState([
    { label: "Maquinário", value: "Maquinario" },
    { label: "Funcionários", value: "Funcionarios" },
    { label: "Outro", value: "Outro" },
  ]);


  const handleSave = async () => {
    if (!nome || !data || !tipoCusto || !descricao || !valorCusto) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const dataFormatada = formatDateForBackend(data);
    if (!dataFormatada) {
      Alert.alert("Erro", "Por favor, insira uma data válida no formato DD/MM/AAAA.");
      return;
    }

    const dados = {
      nome,
      data: dataFormatada,
      tipoCusto,
      descricao,
      valorCusto,
    };

    try {
      if (custoExistente) {
        await atualizarCusto(custoExistente.id, dados);
        Alert.alert("Sucesso", "Custo atualizado com sucesso!");
      } else {
        await cadastrarCusto(dados);
        Alert.alert("Sucesso", "Custo cadastrado com sucesso!");
      }
      navigation.navigate("VizualizarCustos", { reload: true });
    } catch (error) {
      console.error("Erro ao salvar custo:", error.response?.data || error.message);
      Alert.alert("Erro", error.response?.data?.error || "Não foi possível salvar o custo.");
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
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons name="calendar-outline" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Data do Custo (DD/MM/AAAA)"
          placeholderTextColor="#000"
          value={data}
          onChangeText={setData}
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
          fontSize: 16,
          color: "#000",
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
          value={valorCusto}
          onChangeText={setValorCusto}
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
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
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
