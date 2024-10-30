import './gesture-handler.native';
import { StyleSheet, Text, View, ImageBackground, Image, Alert, TouchableOpacity, ScrollView, Button, TextInput } from "react-native";
import React, { useState } from "react";
import HomeStack from "./routes/homeStack";

export default function App() {
  return <HomeStack />;
}