import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Arrow } from "@/components/Arrow";

export default function Register() {
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [message, setMessage] = useState<string>("");
    const router = useRouter()

    const validateFields = () => {
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedAge = age.trim();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(trimmedEmail);
        const isPasswordValid = trimmedPassword.length >= 8;
        const isAgeValid = !isNaN(Number(trimmedAge)) && Number(trimmedAge) > 0;
    
        if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedAge) {
            setMessage("Todos os campos são obrigatórios.");
            return false;
        }
    
        if (!isEmailValid) {
            setMessage("E-mail inválido.");
            return false;
        }
    
        if (!isPasswordValid) {
            setMessage("A senha deve ter no mínimo 8 caracteres.");
            return false;
        }

        if (password != confirmPassword) {
            setMessage("As senhas não coincidem");
            return false;
        }
    
        if (!isAgeValid) {
            setMessage("Idade deve ser um número válido.");
            return false;
        }
    
        return true;
    }

    const handleRegister = async () => {
        if (!validateFields()) return
        
        router.push("/rightRegister");
    }

    return (
        <View style={styles.container}>
            <Arrow link={`./begin`} color="#000"/>
            
            <Text style={{fontSize: 36, fontWeight: '700', width: 320}}>Criar Conta</Text>

            <View style={{width: 320}}>
                <Text>NOME</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={setName} />

                <Text>IDADE</Text>
                <TextInput style={styles.input} placeholder="Digite sua idade" onChangeText={setAge} />

                <Text>E-MAIL</Text>
                <TextInput style={styles.input} placeholder="Digite seu email" onChangeText={setEmail} keyboardType="email-address" />

                <Text>SENHA</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={setPassword} secureTextEntry />

                <Text>CONFIRMAR SENHA</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={setConfirmPassword} secureTextEntry />

                <Text style={{fontSize: 14, color: '#FF0000'}}>{message}</Text>
            </View>

            <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>CRIAR</Text>
            </TouchableOpacity>     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        backgroundColor: '#fff',

        alignItems: 'center',
        gap: 30,

        paddingTop: 100
    },

    input: {
        height: 50,
        width: 320,

        backgroundColor: '#00000000',
        
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,

        marginBottom: 12,
        marginTop: 5,
        paddingLeft: 20,

        fontSize: 16,
    },

    buttonRegister: {
        height: 50,
        width: 280,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#272459',
        borderRadius: 30,
    },
})
