import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link } from "expo-router"

export default function WelcomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>BEM VINDO AO:</Text>
              
            <Image style={styles.image} source={require('../assets/images/logo.jpg')}/>

            <Link href='/begin' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#21005D', fontSize: 16, fontWeight: 600}}>Entrar</Text>
                </TouchableOpacity>
            </Link>          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,

        backgroundColor: '#272459'
    },

    text: {
        color: '#fff',
        fontSize: 22, 
        fontWeight: 600
    },

    image: {
        height: 400,
        width: 360
    },

    button: {
        height: 50,
        width: 260,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#fff',

        borderRadius: 50,
    }
})
