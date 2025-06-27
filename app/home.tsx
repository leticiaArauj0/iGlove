import InfoTable from "@/components/Table";
import ChartPie from "@/components/ChartPie";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { List } from "phosphor-react-native";
import { useState } from "react";
import NavBar from "@/components/NavBar";

export default function Home() {
    const [openNav, setOpenNav] = useState(false)

    return(
        <View>
            {
                openNav ?
                <NavBar close={() => setOpenNav(false)}/>
                :
                null
            }
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => setOpenNav(true)}>
                    <List size={40} color="#03192d" style={{marginVertical: 20, marginHorizontal: 20}} />
                </TouchableOpacity>
            
                <View style={styles.date}>
                    <Text style={styles.title}>Monitoramento:</Text>
                    <Text style={styles.textDate}>Semana 1</Text>
                    <Text style={styles.textDate}>Dia 1:</Text>
                </View>
                <Text style={{ fontSize: 24, fontWeight: 600, color: '#03192d', textAlign: 'center', marginVertical: 20 }}>Grau de Flexibilidade</Text>
                <InfoTable />
                <View style={{marginVertical: 40}}>
                    <Text style={styles.textAverage}>Média do Polegar:      38,75%</Text>
                    <Text style={styles.textAverage}>Média do Indicador:   42,00%</Text>
                    <Text style={styles.textAverage}>Média do Médio:        28,75%</Text>
                    <Text style={styles.textAverage}>Média do Anelar:        31,25%</Text>
                    <Text style={styles.textAverage}>Média do Mindinho:   22,50%</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: 600, color: '#03192d', textAlign: 'center', marginBottom: 20 }}>Média Total</Text>
                    <ChartPie />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },

    title: {
        color: '#03192d',
        fontSize: 42,
        fontWeight: 600
    },

    date: {
        alignSelf: 'flex-start',
        paddingHorizontal: 20
    },

    textDate: {
        fontSize: 24,
        fontWeight: 600,
        color: '#03192d'
    },

    textAverage: {
        fontSize: 20,
        fontWeight: 600,
        color: '#03192d',
        textAlign: 'center'
    }
})
