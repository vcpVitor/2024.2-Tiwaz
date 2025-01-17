import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Inicial'; 
import CadastroPlantacao from '../screens/CadastroPlantacao'; 
import CadastroMaquinas from '../screens/CadastroMaquinas'; 
import CadastroFuncionarios from '../screens/CadastroFuncionarios';
import CadastroEstoque from '../screens/CadastroEstoque';
import GerenciarFinancas from '../screens/GerenciarFinancas';
import Relatorios from '../screens/Relatorios';
import VizualizarPlantacoes from '../screens/VizualizarPlantacoes';
import VizualizarEstoque from '../screens/VizualizarEstoque';
import CadastroColheita from '../screens/CadastroColheita';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* TELA INICIAL*/}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA CADASTRO PLANTACAO*/}
        <Stack.Screen 
          name="CadastroPlantacao" 
          component={CadastroPlantacao} 
          options={{ title: "Cadastro do Plantio" }} 
        />
        {/* TELA CADASTRO MAQUINAS*/}
        <Stack.Screen 
          name="CadastroMaquinas" 
          component={CadastroMaquinas} 
          options={{ title: "Cadastro das Maquinas" }} 
        />
        {/* TELA CADASTRO FUNCIONARIOS*/}
        <Stack.Screen 
          name="CadastroFuncionarios" 
          component={CadastroFuncionarios} 
          options={{ title: "Cadastro de Funcionarios"  }} // Sem cabeçalho padrão
        />
        {/* TELA CADASTRO ESTOQUE*/}
        <Stack.Screen 
          name="CadastroEstoque" 
          component={CadastroEstoque} 
          options={{ title: "Cadastro do Estoque"  }} // Sem cabeçalho padrão
        />
        {/* TELA GERENCIAR FINANCAS*/}
        <Stack.Screen 
          name="GerenciarFinancas" 
          component={GerenciarFinancas} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA RELATORIOS*/}
        <Stack.Screen 
          name="Relatorios" 
          component={Relatorios} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA VIZUALIZAR PLANTACOES*/}
        <Stack.Screen 
          name="VizualizarPlantacoes" 
          component={VizualizarPlantacoes} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA VIZUALIZAR ESTOQUE*/}
        <Stack.Screen 
          name="VizualizarEstoque" 
          component={VizualizarEstoque} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
        {/* TELA Cadastar Colheita*/}
        <Stack.Screen 
          name="CadastroColheita" 
          component={CadastroColheita} 
          options={{ headerShown: false }} // Sem cabeçalho padrão
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;