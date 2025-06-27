import { useLocalSearchParams, useRouter } from 'expo-router';
import { verifyCode, removeCode, generateAndSaveCode } from '@/utils/codeStorage';
import { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Code() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();

  const [codeInputs, setCodeInputs] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");

  const inputsRef = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // apenas 1 número ou vazio

    const updated = [...codeInputs];
    updated[index] = value;
    setCodeInputs(updated);

    if (value && index < 3) {
      inputsRef[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === "Backspace" && codeInputs[index] === "" && index > 0) {
      inputsRef[index - 1].current?.focus();
    }
  };

  const handleSubmit = async () => {
    const enteredCode = codeInputs.join("");
    if (enteredCode.length !== 4) {
      setMessage("Digite o código completo.");
      return;
    }

    if (!email) {
      setMessage("E-mail não encontrado.");
      return;
    }

    const valid = await verifyCode(email, enteredCode);
    if (valid) {
      await removeCode(email);
      router.push({ pathname: '/newPassword', params: { email } });
    } else {
      setMessage("Código inválido.");
    }
  };

  const handleResend = async () => {
    if (!email) {
        setMessage("E-mail não encontrado.");
        return;
    }

        const newCode = await generateAndSaveCode(email);
        alert(`Novo código: ${newCode}`);
    };


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: '700', textAlign: "center" }}>
        Digite o código de verificação
      </Text>

      <View>
        <View style={{ flexDirection: "row", gap: 10 }}>
            {codeInputs.map((value, i) => (
              <TextInput
                key={i}
                ref={inputsRef[i]}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.input}
                value={value}
                onChangeText={(text) => handleChange(i, text)}
                onKeyPress={(e) => handleKeyPress(e, i)}
                autoFocus={i === 0}
              />
            ))}
        </View>
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>Avançar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonResend} onPress={handleResend}>
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#272459" }}>Reenviar código</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    gap: 60,
    paddingTop: 100,
  },

  input: {
    height: 64,
    width: 64,
    backgroundColor: '#00000015',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    fontSize: 26,
    textAlign: 'center',
  },

  button: {
    height: 50,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272459',
    borderRadius: 30,
  },

  buttonResend: {
    height: 50,
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000000',
    borderColor: '#272459',
    borderWidth: 1,
    borderRadius: 50,
  },

  message: {
    color: "red", 
    margin: 'auto', 
    marginTop: 10
  }
});
