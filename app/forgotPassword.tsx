import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router"
import { Arrow } from "@/components/Arrow";
import { useState } from "react";
import { isEmailRegistered } from "@/utils/userStorage";
import { generateAndSaveCode } from '@/utils/codeStorage';

export default function forgotPassword() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const validateFields = () => {
        const trimmedEmail = email.trim();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(trimmedEmail);
    
        if (!isEmailValid) {
            setMessage("E-mail inválido.");
            return false;
        }
    
        return true;
    }

    const handleCode = async () => {
        if (!validateFields()) return;

        const exists = await isEmailRegistered(email.trim());
        if (!exists) {
            setMessage("E-mail não encontrado.");
            return;
        }

        const code = await generateAndSaveCode(email.trim());

        alert(`Seu código de verificação é: ${code}`);

        router.push({ pathname: '/code', params: { email: email.trim() } });
    }

    return(
        <View style={styles.container}>
            <Arrow color="#000"/>

            <Text style={{fontSize: 40, width: 320, fontWeight: 600}}>Esqueceu sua senha?</Text>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#272459'}}>Por favor, digite seu e-mail:</Text>

            <View>
                <Text>E-MAIL</Text>
                <TextInput style={styles.input} placeholder="Digite seu e-mail" onChangeText={setEmail} />
                <Text style={{fontSize: 14, color: '#FF0000'}}>{message}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleCode}>
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>Enviar código</Text>
            </TouchableOpacity>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        backgroundColor: '#FFF',

        alignItems: 'center',
        gap: 40,

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

    button: {
        height: 50,
        width: 320,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#272459',
        borderRadius: 30,
    },
})
