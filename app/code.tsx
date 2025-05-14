import { Arrow } from "@/components/Arrow";
import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Code() {
    return(
        <View style={styles.container}>
            <Arrow link={`./forgotPassword`} color="#000"/>

            <Text style={{fontSize: 36, fontWeight: '700', textAlign: "center"}}>Digite o código de verificação</Text>

            <View style={{flexDirection: 'row', gap: 10}}>
                <TextInput keyboardType="number-pad" style={styles.input} />
                <TextInput keyboardType="number-pad" style={styles.input} />
                <TextInput keyboardType="number-pad" style={styles.input} />
                <TextInput keyboardType="number-pad" style={styles.input} />
            </View>

            <View style={{gap: 20, alignItems: 'center'}}>
                <Link href='/rightCode' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>Avançar</Text>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity style={styles.buttonResend}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: '#272459'}}>Reenviar código</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        backgroundColor: '#FFF',

        alignItems: 'center',
        gap: 60,

        paddingTop: 100
    },

    input: {
        height: 64,
        width: 64,

        backgroundColor: '#00000015',
        
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,

        marginBottom: 10,
        marginLeft: 5,

        fontSize: 26,
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
        borderRadius: 50
    }
})
