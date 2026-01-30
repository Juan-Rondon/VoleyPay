import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 🔐 Aquí conectas tu API
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <LinearGradient
      colors={["#0B0B0D", "#111827"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, justifyContent: "center" }}
      >
        {/* LOGO */}
        <Image
          source={require("../../../assets/images/logo-genesis.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>INICIAR SESIÓN</Text>

          {/* EMAIL */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={20} color="#D4AF37" />
            <TextInput
              placeholder="Ingresa tu correo"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputContainer}>
            <Ionicons name="key" size={20} color="#D4AF37" />
            <TextInput
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* OLVIDASTE */}
          <TouchableOpacity>
            <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          {/* BOTÓN */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
        </View>

        {/* TÉRMINOS */}
        <TouchableOpacity>
          <Text style={styles.terms}>Términos y Condiciones</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  logo: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#16233A",
    borderRadius: 22,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },

  title: {
    color: "#D4AF37",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C2B45",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: "#FFFFFF",
    fontSize: 15,
  },

  forgot: {
    color: "#D4AF37",
    opacity: 0.85,
    textAlign: "center",
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#D4AF37",
    borderRadius: 16,
    paddingVertical: 14,
    marginTop: 10,
  },

  buttonText: {
    color: "#0B0B0D",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 1,
  },

  terms: {
    color: "#D4AF37",
    opacity: 0.7,
    textAlign: "center",
    marginTop: 25,
    fontSize: 13,
  },
});
