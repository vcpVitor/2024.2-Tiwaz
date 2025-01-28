import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Platform,
  SafeAreaView,
  Alert,
  RefreshControl,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from 'expo-location';

const API_URL = "http://seu-backend.com/api/weather";

export default function WeatherForecastScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(`${API_URL}/forecast?location=${location}`);
      const data = await response.json();
      
      const current = data.find(item => item.isCurrent);
      const forecast = data.filter(item => !item.isCurrent);
      
      setCurrentWeather(current);
      setForecastData(forecast);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados do clima");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const location = await getLocation();
      await fetchWeatherData(location);
      Alert.alert("Atualizado", "Dados atualizados com sucesso!");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
    setRefreshing(false);
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') throw new Error('Permissão de localização negada');

    let location = await Location.getCurrentPositionAsync({});
    return `${location.coords.latitude},${location.coords.longitude}`;
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const location = await getLocation();
        await fetchWeatherData(location);
      } catch (error) {
        Alert.alert("Erro", error.message);
        setLoading(false);
      }
    };
    initialize();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#388E3C" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/images/fundo3.jpg")}
        style={styles.backgroundImage}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          {/* Componente de Clima Atual Atualizado */}
          {currentWeather && (
            <View style={styles.currentWeatherContainer}>
              <Ionicons name={getWeatherIcon(currentWeather.condition)} size={64} color="#FFC107" />
              <View style={styles.weatherDetails}>
                <Text style={styles.currentCondition}>{currentWeather.condition}</Text>
                <Text style={styles.currentTemperature}>
                  {currentWeather.temperatureMax}°C
                </Text>
                <Text style={styles.weatherSubtext}>
                  Próxima chuva: {currentWeather.rainProbability}%
                </Text>
              </View>
            </View>
          )}

          {/* Lista de Previsão Atualizada */}
          <View style={styles.forecastContainer}>
            <Text style={styles.forecastTitle}>Próximos 5 Dias</Text>
            {forecastData.map((day, index) => (
              <View key={index} style={styles.forecastItem}>
                <Ionicons
                  name={getWeatherIcon(day.condition)}
                  size={32}
                  color="#FFC107"
                />
                <View style={styles.forecastDetails}>
                  <Text style={styles.forecastDay}>
                    {new Date(day.date).toLocaleDateString('pt-BR', { weekday: 'long' })}
                  </Text>
                  <Text style={styles.forecastCondition}>{day.condition}</Text>
                  <Text style={styles.forecastTemperature}>
                    {day.temperatureMin}°C - {day.temperatureMax}°C
                  </Text>
                  <Text style={styles.forecastRain}>
                    Chance de chuva: {day.rainProbability}%
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subHeader: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 5,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  currentWeatherContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  weatherDetails: {
    marginLeft: 15,
    alignItems: "flex-start",
  },
  currentCondition: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  currentTemperature: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#388E3C",
    marginVertical: 5,
  },
  weatherSubtext: {
    fontSize: 14,
    color: "#666",
  },
  forecastContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  forecastItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  forecastDetails: {
    marginLeft: 15,
    flex: 1,
  },
  forecastDay: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#388E3C",
  },
  forecastCondition: {
    fontSize: 14,
    color: "#666",
  },
  forecastTemperature: {
    fontSize: 14,
    color: "#333",
  },
  forecastRain: {
    fontSize: 12,
    color: "#0288D1",
  },
});
