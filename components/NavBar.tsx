import { Link, router } from "expo-router";
import { EnvelopeSimple, List, LockKey, SignOut, User } from "phosphor-react-native";
import { View,Text, StyleSheet, GestureResponderEvent, TouchableOpacity } from "react-native";
import { useEffect, useState} from "react";
import { getLoggedUser, removeLoggedUser } from "@/utils/authStorage";
interface NavBarProps {
  close: ((event: GestureResponderEvent) => void) | undefined;
}

export default function NavBar({close}: NavBarProps) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
    const loadUser = async () => {
        const user = await getLoggedUser();
        if (user) {
        setName(user.name);
        setEmail(user.email);
        }
    };
    loadUser();
    }, []);

    const handleLogout = async () => {
        await removeLoggedUser()
        router.push("/")
    }

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
                        <Text style={styles.text}>{name}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Email</Text>
                    <View style={styles.containerInfo}>
                        <View style={styles.containerIcon}>
                            <EnvelopeSimple size={30} color="#fff" />
                        </View>
                        <Text style={styles.text}>{email}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Segurança</Text>
                    <TouchableOpacity onPress={() => {router.push("/newPassword")}} style={styles.containerInfo}>
                        <View style={styles.containerIcon}>
                            <LockKey size={30} color="#fff" weight="fill" />
                        </View>
                        <Text style={styles.text}>Mudar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={[styles.containerInfo, {marginBottom: 20}]} onPress={handleLogout}>
                <View>
                    <SignOut size={36} color="#fff" weight="fill" />
                </View>
                <Text style={{textTransform: 'uppercase', color: '#fff', fontSize: 18}}>Sair</Text>
            </TouchableOpacity>
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
        width: 45,
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
