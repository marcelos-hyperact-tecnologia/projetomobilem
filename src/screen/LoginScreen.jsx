import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import perfil from '../asserts/perfil.webp';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Image source={perfil} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: '#136add',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#578bcf',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
