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
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import * as Location from "expo-location";


export default function WeatherForecastScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const API_URL = "http://10.0.2.2:3000/api/weather/"; // para rodar no celular "http://IP DO PC QUE ESTA RODANDO O BACK:3000/api/weather/"

  const loadLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permissão para acesso à localização negada");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const teste = {"accuracy": 600, "altitude": 0, "altitudeAccuracy": 0, "heading": 0, "latitude": -15.833307382074835, "longitude": -48.04159216323175, "speed": 0};
    setLocation(teste);
  };

  const translateWeekday = (weekday) => {
    const days = {
      Sun: "Domingo", Mon: "Segunda", Tue: "Terça",
      Wed: "Quarta", Thu: "Quinta", Fri: "Sexta", Sat: "Sábado"
    };
    return days[weekday] || weekday;
  };

  const fetchWeatherData = async () => {
    try {
      if (!location) return;

      const response = await axios.get(API_URL, {
        params: {
          lat: location.latitude,
          lon: location.longitude
        }
      });
      const processedData = {
        current: {
          condition: response.data.current.description,
          temperature: response.data.current.temperature.temp,
          humidity: response.data.current.humidity,
          rainProbability: response.data.current.rainProbability,
        },
        location: response.data.location,
        forecast: response.data.forecast.map((day, index) => ({
          day: index === 0 ? "Hoje" : translateWeekday(day.weekday),
          date: day.date,
          condition: day.condition,
          temperature: { min: day.temperature.min, max: day.temperature.max },
          rainProbability: day.rainProbability,
          humidity: day.humidity
        }))
      };

      setWeatherData(processedData);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível obter os dados meteorológicos");
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await loadLocation();
      await fetchWeatherData();
      Alert.alert("Atualizado", "Dados atualizados com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Falha ao atualizar dados");
    }
    setRefreshing(false);
  }, [location]);

  useEffect(() => {
    loadLocation();
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "tempo limpo":
        return ["sunny", "#FFD700"]; 
      case "tempo nublado":
        return ["cloud", "#90A4AE"]; 
      case "chuva":
        return ["rainy", "#2196F3"];
      case "chuvas esparsas":
        return ["rainy-outline", "#64B5F6"];
      case "chuviscos":
        return ["rainy-outline", "#81D4FA"];
      default:
        return ["cloud", "#90A4AE"];
    }
  };

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loadingText}>Carregando dados meteorológicos...</Text>
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
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.currentWeatherContainer}>
            <Ionicons
              style={styles.iconWrapper} 
              name={getWeatherIcon(weatherData.current.condition)[0]} 
              size={64} 
              color={getWeatherIcon(weatherData.current.condition)[1]}
            />
            <View style={styles.weatherDetails}>
              <Text style={styles.locationName}>{weatherData.location}</Text>
              <Text style={styles.currentCondition}>
                {weatherData.current.condition}
              </Text>
              <Text style={styles.currentTemperature}>
                {Math.round(weatherData.current.temperature)}°C
              </Text>
              <Text style={styles.weatherHumidity}>Umidade: {weatherData.current.humidity}%</Text>
              <Text style={styles.weatherSubtext}>
                Probabilidade de chuva: {weatherData.current.rainProbability}%
              </Text>
            </View>
          </View>

          <View style={styles.forecastContainer}>
            <Text style={styles.forecastTitle}>Próximos 10 Dias</Text>
            {weatherData.forecast.map((day, index) => (
              <View key={index} style={styles.forecastItem}>
                <Ionicons
                  name={getWeatherIcon(day.condition)[0]}
                  size={32}
                  color={getWeatherIcon(day.condition)[1]}
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
                  <Text style={styles.forecastRain}>
                    Umidade: {day.humidity}%
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
  currentWeatherContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 25,
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
  iconWrapper: {
    marginRight: 15,
  },
  locationName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0288D1",
  },
  weatherDetails: {
    alignItems: "flex-start",
  },
  currentCondition: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  currentTemperature: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#388E3C",
    marginVertical: 5,
  },
  weatherHumidity: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  weatherSubtext: {
    fontSize: 16,
    color: "#666",
  },
  forecastContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 20,
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
    fontSize: 22,
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
    fontSize: 18,
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
    fontSize: 14,
    color: "#0288D1",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0288D1", // Fundo azul para dar um toque climático
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
});
