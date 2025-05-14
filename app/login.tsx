import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { Arrow } from "@/components/Arrow";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const router = useRouter() ;

    const validateFields = () => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(trimmedEmail);
        const isPasswordValid = trimmedPassword.length >= 8;

        if (!trimmedEmail || !trimmedPassword) {
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
    
        return true;
    }

    const handleLogin = async () => {
        if (!validateFields()) return

        router.push('/home')
    }   

    return (
        <View style={styles.container}>
            <Arrow link={`./begin`} color="#000"/>
            
            <Text style={{fontSize: 36, fontWeight: '700', width: 320}}>Login</Text>
    
            <View style={{width: 320}}>
                <Text>E-MAIL</Text>
                <TextInput style={styles.input} placeholder="Digite seu email" onChangeText={setEmail} keyboardType="email-address" />

                <Text>SENHA</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={setPassword} secureTextEntry />
    
                <Text style={{fontSize: 14, color: '#FF0000'}}>{message}</Text>
            </View>

            <TouchableOpacity style={styles.buttonRegister} onPress={handleLogin}>
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>ENTRAR</Text>
            </TouchableOpacity>

            <Link href='/forgotPassword'>
                <Text style={{color: '#65558F', fontWeight: '600'}}>Esqueci minha senha</Text> 
            </Link>    
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
    
        marginBottom: 20,
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
