import { Arrow } from "@/components/Arrow";
import { Link } from "expo-router";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";

export default function rightCode() {
    return(
        <View style={styles.container}>
            <Arrow link={`./code`} color="#fff" />

            <Text style={{fontSize: 40, fontWeight: 600, width: 300, textAlign: 'center', lineHeight: 50, color: '#fff'}}>Código confirmado!</Text>

            <Link href='/newPassword' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 18, color: '#272459'}}>Próximo</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        backgroundColor: '#272459',

        alignItems: 'center',
        gap: 140,

        paddingTop: 200
    },

    image: {
        height: 120,
        width: 120
    },

    button: {
        height: 50,
        width: 280,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#fff',
        borderRadius: 50,
    }
})
