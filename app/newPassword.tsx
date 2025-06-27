import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Arrow } from "@/components/Arrow";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { updateUserPassword } from "@/utils/userStorage";

export default function NewPassword() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdatePassword = async () => {
    if (!password || !confirmPassword) {
      setMessage("Preencha todos os campos.");
      return;
    }

    if (password.length < 8) {
      setMessage("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem.");
      return;
    }

    const updated = await updateUserPassword(email.trim(), password.trim());

    if (updated) {
      setTimeout(() => router.replace("/login"), 1000)
    } else {
      setMessage("Erro ao atualizar a senha.");
    }
  };

  return (
    <View style={styles.container}>
      <Arrow color="#000" />

      <Text style={{ fontSize: 36, width: 320, fontWeight: "600" }}>Nova Senha</Text>
      <Text style={{ fontSize: 20, width: 320, fontWeight: "700", color: "#272459" }}>
        Digite sua nova senha:
      </Text>

      <View>
        <Text>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          onChangeText={setPassword}
        />

        <Text>CONFIRMAR SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          onChangeText={setConfirmPassword}
        />

        <Text style={{ color: "red", fontSize: 14 }}>{message}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFF",
    alignItems: "center",
    gap: 40,
    paddingTop: 100,
  },

  input: {
    height: 50,
    width: 320,
    backgroundColor: "#00000000",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    marginBottom: 16,
    marginTop: 5,
    paddingLeft: 20,
    fontSize: 16,
  },

  button: {
    height: 50,
    width: 280,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272459",
    borderRadius: 30,
  },
});
