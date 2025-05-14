import { View, Text, StyleSheet, TouchableOpacity } from "react-native";  
import { Link } from "expo-router";

export default function Begin() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Olá!</Text>
                <Text style={styles.text}>Antes de começar, precisamos saber:</Text>
            </View>

            <View style={{gap: 30}}>
                <Link href='/register' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize: 16, color: '#fff'}}>Não possuo cadastro</Text>
                    </TouchableOpacity>
                </Link>
                <Link href='/login' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize: 16, color: '#fff'}}>Sou cadastrado</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        alignItems: 'center',
        gap: 160,

        backgroundColor: '#272459',
        paddingTop: 50,
        paddingHorizontal: 20
    },

    title: {
        fontSize: 56,
        fontWeight: '700',
        color: '#fff',
    },

    text: {
        color: '#fff',
        fontSize: 36,
        fontWeight: '600'
    },

    button: {
        height: 50,
        width: 280,

        justifyContent: 'center',
        alignItems: 'center',
        
        borderColor: '#fff',
        borderWidth: 2,

        borderRadius: 50,
    },
})
