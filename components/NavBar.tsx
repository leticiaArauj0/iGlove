import { EnvelopeSimple, List, LockKey, SignOut, User } from "phosphor-react-native";
import { View,Text, StyleSheet, GestureResponderEvent, TouchableOpacity } from "react-native";

interface NavBarProps {
    close: ((event: GestureResponderEvent) => void) | undefined
}

export default function NavBar({close}: NavBarProps) {
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.top}>
                    <TouchableOpacity onPress={close} style={{marginVertical: 20}}>
                        <List size={40} color="#fff" />
                    </TouchableOpacity>
                
                    <Text style={{ fontSize: 26, fontWeight: 600, color: '#fff' }}>MENU</Text>
                </View>
                <View>
                    <Text style={styles.title}>Nome</Text>
                    <View style={styles.containerInfo}>
                        <View style={styles.containerIcon}>
                            <User size={30} color="#fff" weight="fill" />
                        </View>
                        <Text style={styles.text}>Nome</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Email</Text>
                    <View style={styles.containerInfo}>
                        <View style={styles.containerIcon}>
                            <EnvelopeSimple size={30} color="#fff" />
                        </View>
                        <Text style={styles.text}>Email</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Segurança</Text>
                    <View style={styles.containerInfo}>
                        <View style={styles.containerIcon}>
                            <LockKey size={30} color="#fff" weight="fill" />
                        </View>
                        <Text style={styles.text}>Mudar Senha</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.containerInfo, {marginBottom: 20}]}>
                <View>
                    <SignOut size={36} color="#fff" weight="fill" />
                </View>
                <Text style={{textTransform: 'uppercase', color: '#fff', fontSize: 18}}>Sair</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '65%',
        height: '100%',
        backgroundColor: '#272459',
        zIndex: 1,
        justifyContent: 'space-between'
    },

    top: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 20
    },

    title: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        marginBottom: 5,
        marginTop: 10
    },

    containerIcon: {
        borderColor: '#fff',
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerInfo: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#31356e',
        paddingLeft: 20,
        height: 50,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },

    text: {
        color: '#fff',
        fontSize: 17.5
    }
})
