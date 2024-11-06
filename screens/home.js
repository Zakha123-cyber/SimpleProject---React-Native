import * as React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Alert, TouchableOpacity, ScrollView, Button, TextInput } from "react-native";
import { useState } from "react";

function HomeScreen({ navigation }) {
  const showAlert = (message) => {
    Alert.alert("Awas Hewan Buas!", message, [{ text: "OK" }]);
  };

  const [input, setInput] = useState("");
  const [savedText, setSavedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSave = () => {
    setSavedText(input);
  };
  return (
    <ImageBackground
      source={require("../assets/emyu.jpg")} // Menggunakan gambar lokal
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container2}>
          <Text style={styles.textStyle}>Hallo Kami Dari Kelompok 12</Text>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal contentContainerStyle={styles.imageRow}>
            <View style={styles.imageBatas}>
              <TouchableOpacity onPress={() => showAlert("Haloo nama saya Anap, saya suka bermain gitar")} style={styles.containerImage}>
                <View style={styles.overlay}>
                  <Image source={require("../assets/anap.jpg")} style={styles.image} />
                </View>
              </TouchableOpacity>
              <Button
                title="Halo Saya Anap"
                onPress={() => {
                  showAlert("Haloo nama saya Anap, saya suka bermain gitar");
                  const params = {
                    name: "Anap",
                    hoby: "Gitar",
                    foto: require("../assets/anap.jpg"),
                    kata_kata: "Haloo nama saya Anap, saya suka bermain gitar",
                  };
                  navigation.navigate("Detail", params);
                }}
                color="#222021"
                style={styles.buttonStyle}
              />
            </View>
            <View>
              <TouchableOpacity onPress={() => showAlert("Perkenalkan nama saya Devies, biasa dipanggil Nengok, saya suka bermain game")} style={styles.containerImage}>
                <View style={styles.overlay}>
                  <Image source={require("../assets/devies.jpg")} style={styles.image} />
                </View>
              </TouchableOpacity>
              <Button
                title="Halo Saya Devies"
                onPress={() => {
                  showAlert("Perkenalkan nama saya Devies, biasa dipanggil Nengok, saya suka bermain game");
                  const params = {
                    name: "Devies",
                    hoby: "Mengocok Perut",
                    foto: require("../assets/devies.jpg"),
                    kata_kata: "Perkenalkan nama saya Devies, biasa dipanggil Nengok, saya suka bermain game",
                  };
                  navigation.navigate("Detail", params);
                }}
                color="#222021"
                style={styles.buttonStyle}
              />
            </View>
            <View style={styles.imageBatas}>
              <TouchableOpacity onPress={() => showAlert("Perkenalkan nama saya Zakha, biasa dipanggil Jaka, saya suka Anap")} style={styles.containerImage}>
                <View style={styles.overlay}>
                  <Image source={require("../assets/jaka.jpg")} style={styles.image} />
                </View>
              </TouchableOpacity>
              <Button
                title="Halo Saya Zakha"
                onPress={() => {
                  showAlert("Perkenalkan nama saya Zakha, biasa dipanggil Jaka, saya suka Anap");
                  const params = {
                    name: "Zakha",
                    hoby: "Membadut",
                    foto: require("../assets/jaka.jpg"),
                    kata_kata: "Perkenalkan nama saya Zakha, biasa dipanggil Jaka, saya suka Anap",
                  };
                  navigation.navigate("Detail", params);
                }}
                color="#222021"
                style={styles.buttonStyle}
              />
              <View style={styles.container}></View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.container1}>
          <Text style={styles.label}>Masukkan Nama Anda:</Text>

          {/* TextInput untuk mengambil input dari pengguna */}
          <TextInput
            style={styles.input}
            placeholder="Nama Anda"
            onChangeText={(text) => setInput(text)} // Update state saat teks berubah
            value={input} // Menampilkan nilai state di TextInput
          />

          {/* Tombol untuk menampilkan input pengguna */}
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Simpan</Text>
          </TouchableOpacity>

          {/* Menampilkan teks dari input */}
          <Text style={styles.result}>Nama Anda: </Text>
          <Button
            title={isVisible ? "Sembunyikan Pesan" : "Tampilkan Pesan"}
            onPress={() => setIsVisible(!isVisible)} // Toggle nilai isVisible
          />

          {/* Menampilkan komponen berdasarkan nilai isVisible */}
          {isVisible && <Text style={styles.text}>Halo! {savedText}</Text>}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Mengisi seluruh ruang
    alignItems: "center", // Mengatur elemen di tengah secara horizontal
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 3, // Menggunakan flex untuk mengisi seluruh ruang
    justifyContent: "center", // Mengatur elemen di tengah secara vertikal
    alignItems: "center", // Mengatur elemen di tengah secara horizontal
    // borderWidth: 5,
    borderColor: "white",
    marginBottom: 20,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  image: {
    width: 200,
    height: 300,
  },
  imageRow: {
    flexDirection: "row",
  },
  textStyle: {
    marginTop: 50,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
    fontFamily: "sans-serif-medium",
    fontStyle: "italic",
  },
  containerImage: {
    marginBottom: 10,
  },
  textImage: {
    marginTop: 20,
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
    padding: 5,
    borderRadius: 5,
    fontFamily: "sans-serif-medium",
    fontStyle: "italic",
  },
  imageBatas: {
    marginHorizontal: 20,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 70,
    backgroundColor: "rgba(0, 0, 1, 0.5)",
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#fff",
  },
  input: {
    height: 50,
    width: 200,
    borderColor: "#D30000",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "#fff",
  },
});

export default HomeScreen;
