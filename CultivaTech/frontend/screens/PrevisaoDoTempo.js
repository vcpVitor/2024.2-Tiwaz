import React, { useState, useCallback } from "react";
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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WeatherForecastScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const forecastData = [
    {
      day: "Hoje",
      date: "19/01/2025",
      condition: "Ensolarado",
      temperature: { min: 22, max: 30 },
      rainProbability: 5,
    },
    {
      day: "Amanhã",
      date: "20/01/2025",
      condition: "Parcialmente Nublado",
      temperature: { min: 20, max: 28 },
      rainProbability: 20,
    },
    {
      day: "Sábado",
      date: "21/01/2025",
      condition: "Chuvoso",
      temperature: { min: 18, max: 25 },
      rainProbability: 80,
    },
    {
      day: "Domingo",
      date: "22/01/2025",
      condition: "Ensolarado",
      temperature: { min: 21, max: 29 },
      rainProbability: 0,
    },
    {
      day: "Segunda",
      date: "23/01/2025",
      condition: "Nublado",
      temperature: { min: 19, max: 27 },
      rainProbability: 60,
    },
    {
      day: "Terça",
      date: "24/01/2025",
      condition: "Ensolarado",
      temperature: { min: 21, max: 30 },
      rainProbability: 10,
    },
    {
      day: "Quarta",
      date: "25/01/2025",
      condition: "Parcialmente Nublado",
      temperature: { min: 23, max: 31 },
      rainProbability: 15,
    },
  ];

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Ensolarado":
        return "sunny";
      case "Parcialmente Nublado":
        return "partly-sunny";
      case "Chuvoso":
        return "rainy";
      case "Nublado":
        return "cloud";
      default:
        return "cloud";
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      Alert.alert("Atualizado", "Dados atualizados com sucesso!");
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/images/fundo3.jpg")}
        style={styles.backgroundImage}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >


          <View style={styles.currentWeatherContainer}>
            <Ionicons name="sunny" size={64} color="#FFC107" />
            <View style={styles.weatherDetails}>
              <Text style={styles.currentCondition}>Ensolarado</Text>
              <Text style={styles.currentTemperature}>25°C</Text>
              <Text style={styles.weatherSubtext}>
                Próxima chuva em: 2 dias
              </Text>
            </View>
          </View>

          <View style={styles.forecastContainer}>
            <Text style={styles.forecastTitle}>Próximos 7 Dias</Text>
            {forecastData.map((day, index) => (
              <View key={index} style={styles.forecastItem}>
                <Ionicons
                  name={getWeatherIcon(day.condition)}
                  size={32}
                  color="#FFC107"
                />
                <View style={styles.forecastDetails}>
                  <Text style={styles.forecastDay}>
                    {day.day} - {day.date}
                  </Text>
                  <Text style={styles.forecastCondition}>{day.condition}</Text>
                  <Text style={styles.forecastTemperature}>
                    {day.temperature.min}°C - {day.temperature.max}°C
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
