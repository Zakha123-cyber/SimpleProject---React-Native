import React from "react";
import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";

function DetailsScreen({ route, navigation }) {
  const { foto, ...otherParams } = route.params;
  return (
    <ImageBackground
      source={require("../assets/emyu.jpg")} // Menggunakan gambar lokal
      style={styles.background}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          <Image source={foto} style={styles.image1} />
        </View>
        {/* Mapping sisa data dari params */}
        {Object.entries(otherParams).map(([key, value]) => (
          <View key={key} style={styles.backgroundText2}>
            <Text style={styles.text1}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
            </Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Mengisi seluruh ruang
    alignItems: "center", // Mengatur elemen di tengah secara horizontal
  },
  image1: {
    width: 200,
    height: 300,
    backgroundColor: "#ffffff",
    shadowColor: "#000", // Warna bayangan
    shadowOffset: { width: 10, height: 10 }, // Bayangan horizontal dan vertikal
    shadowOpacity: 0.5, // Transparansi bayangan
    shadowRadius: 10, // Radius untuk soft shadow
    elevation: 15, // Efek bayangan untuk Android
    borderWidth: 1,
    borderColor: "#ddd",
    transform: [{ translateY: -60 }],
    marginBottom: 20,
  },
  backgroundText2: {
    marginTop: 10,
    width: 300,
    // height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000", // Warna bayangan
    shadowOffset: { width: 10, height: 10 }, // Bayangan horizontal dan vertikal
    shadowOpacity: 0.5, // Transparansi bayangan
    shadowRadius: 10, // Radius untuk soft shadow
    elevation: 15, // Efek bayangan untuk Android
    borderWidth: 1,
    borderColor: "#ddd",
    transform: [{ translateY: -60 }],
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});

export default DetailsScreen;
