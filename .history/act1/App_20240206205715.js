import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Dimensions,
  Picker,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("es-US");

  const handleLogin = () => {
 
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.languageText}>
          Español (Estados Unidos) <Text style={styles.downArrow}>&#9660;</Text>
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Instagram</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Button
          title="                         Iniciar sesión                              "
          onPress={handleLogin}
          color="#285e7b"
          style={styles.button}
        />
        <Text style={styles.forgotPasswordText}>
          ¿Olvidaste tus datos o inicio de sesión?{" "}
          <Text style={styles.helpText}>Obten ayuda</Text>
        </Text>
        <Text style={styles.separator}>────────── O ──────────</Text>
        <Button
  title="Continuar como Eduardo Castro"
  onPress={() => console.log('Continuar')}
  color="#0290ff"
  style={styles.button}
  icon={<MaterialCommunityIcons name="facebook" size={24} color="white" />}
/>


      </View>
      <View style={styles.footer}>
        <Text style={styles.separator}>───────────────────────</Text>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            ¿No tienes cuenta?{" "}
            <Text style={styles.registerLink}>Regístrate</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  languageText: {
    marginTop: 20,
    color: "#808080",
    fontSize: 16,
  },
  downArrow: {
    fontSize: 16,
    transform: [{ rotate: "90deg" }],
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontStyle: "italic", 
    fontSize: 30,
    marginBottom: 30,
    color: "#fff",
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#808080",
    fontSize: 12,
    marginTop: 20,
  },
  helpText: {
    fontWeight: "bold",
    color: "#fff",
  },
  separator: {
    color: "#fff",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  continueAsText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 20,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registerText: {
    color: "#808080",
    fontSize: 12,
  },
  registerLink: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LoginScreen;
