import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router"
import { Arrow } from "@/components/Arrow";

export default function newPassword() {
    return(
        <View style={styles.container}>
            <Arrow link={`./code`} color="#000"/>

            <Text style={{fontSize: 36, width: 320, fontWeight: 600}}>Nova Senha</Text>
            <Text style={{fontSize: 20, width: 320, fontWeight: '700', color: '#272459'}}>Digite sua nova senha:</Text>

            <View>
                <Text>SENHA</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
                
                <Text>CONFIRMAR SENHA</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
            </View>

            <Link href='/' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>Cadastrar</Text>
                </TouchableOpacity>  
            </Link>
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

        marginBottom: 16,
        marginTop: 5,
        paddingLeft: 20,

        fontSize: 16,
    },

    button: {
        height: 50,
        width: 280,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#272459',
        borderRadius: 30,
    },
})
